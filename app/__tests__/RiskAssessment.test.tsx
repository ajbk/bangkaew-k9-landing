import '@testing-library/jest-dom';
import { getAssessmentResult } from '../RiskAssessment';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RiskAssessment from '../RiskAssessment';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: Record<string, unknown>) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt="" {...props} />;
  },
}));

describe('getAssessmentResult', () => {
  it('returns Critical for score >= 5', () => {
    const result = getAssessmentResult(5);
    expect(result.level).toBe('Critical');
    expect(result.tone).toBe('critical');
    expect(result.packageName).toBe('Enterprise / Professional Pilot');
  });

  it('returns Critical for score 6 (max)', () => {
    const result = getAssessmentResult(6);
    expect(result.level).toBe('Critical');
  });

  it('returns High for score 3-4', () => {
    const result3 = getAssessmentResult(3);
    expect(result3.level).toBe('High');
    expect(result3.tone).toBe('high');
    expect(result3.packageName).toBe('Professional');

    const result4 = getAssessmentResult(4);
    expect(result4.level).toBe('High');
  });

  it('returns Medium for score 1-2', () => {
    const result1 = getAssessmentResult(1);
    expect(result1.level).toBe('Medium');
    expect(result1.tone).toBe('medium');
    expect(result1.packageName).toBe('Standard');

    const result2 = getAssessmentResult(2);
    expect(result2.level).toBe('Medium');
  });

  it('returns Low for score 0', () => {
    const result = getAssessmentResult(0);
    expect(result.level).toBe('Low');
    expect(result.tone).toBe('low');
    expect(result.packageName).toBe('Free Assessment');
  });
});

describe('RiskAssessment component', () => {
  it('renders with default selections (monitoring + sensitiveData)', () => {
    render(<RiskAssessment />);
    const monitoringBtn = screen.getByRole('button', { name: /monitor/i });
    const sensitiveBtn = screen.getByRole('button', { name: /ข้อมูลลูกค้า/i });
    expect(monitoringBtn).toHaveAttribute('aria-pressed', 'true');
    expect(sensitiveBtn).toHaveAttribute('aria-pressed', 'true');
  });

  it('toggles item off when clicked', async () => {
    const user = userEvent.setup();
    render(<RiskAssessment />);
    const monitoringBtn = screen.getByRole('button', { name: /monitor/i });
    expect(monitoringBtn).toHaveAttribute('aria-pressed', 'true');
    await user.click(monitoringBtn);
    expect(monitoringBtn).toHaveAttribute('aria-pressed', 'false');
  });

  it('toggles item on when clicked', async () => {
    const user = userEvent.setup();
    render(<RiskAssessment />);
    const approvalBtn = screen.getByRole('button', { name: /อนุมัติ/i });
    expect(approvalBtn).toHaveAttribute('aria-pressed', 'false');
    await user.click(approvalBtn);
    expect(approvalBtn).toHaveAttribute('aria-pressed', 'true');
  });

  it('updates risk level when items are toggled', async () => {
    const user = userEvent.setup();
    render(<RiskAssessment />);
    // Default: 2 items selected → score 2 → Medium
    expect(screen.getByText('Medium')).toBeInTheDocument();
    // Click 3 more items to reach score 5 → Critical
    await user.click(screen.getByRole('button', { name: /อนุมัติ/i }));
    await user.click(screen.getByRole('button', { name: /สาขา/i }));
    await user.click(screen.getByRole('button', { name: /phishing/i }));
    expect(screen.getByText('Critical')).toBeInTheDocument();
  });

  it('clears all selections when reset button clicked', async () => {
    const user = userEvent.setup();
    render(<RiskAssessment />);
    const resetBtn = screen.getByRole('button', { name: /ล้างคำตอบ/i });
    await user.click(resetBtn);
    const buttons = screen.getAllByRole('button', { pressed: false });
    expect(buttons.length).toBe(6);
  });
});
