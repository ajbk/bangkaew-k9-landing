import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SubsidyCalculator from '../SubsidyCalculator';

describe('SubsidyCalculator', () => {
  it('renders the default office calculation', () => {
    render(<SubsidyCalculator />);

    expect(screen.getByRole('button', { name: /K9 Office/i })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByText('฿199/mo')).toBeInTheDocument();
    expect(screen.getByText(/K9 Office ราคาเต็ม ฿499\/mo/i)).toBeInTheDocument();
  });

  it('updates the estimate when selecting K9 OT and a 1000 baht subsidy', async () => {
    const user = userEvent.setup();
    render(<SubsidyCalculator />);

    await user.click(screen.getByRole('button', { name: /K9 OT/i }));
    await user.click(screen.getByRole('button', { name: '฿1,000' }));

    expect(screen.getByText('฿1,900/mo')).toBeInTheDocument();
    expect(screen.getByText(/K9 OT ราคาเต็ม ฿2,900\/mo/i)).toBeInTheDocument();
    expect(screen.getByText('฿12,000')).toBeInTheDocument();
  });

  it('shows endpoint overage changes in the customer price', async () => {
    const user = userEvent.setup();
    render(<SubsidyCalculator />);

    await user.click(screen.getByRole('button', { name: /K9 Pro/i }));
    const slider = screen.getByLabelText(/Endpoints protected/i);
    fireEvent.change(slider, { target: { value: '40' } });

    expect(screen.getByText('฿1,580/mo')).toBeInTheDocument();
    expect(screen.getByText('10 × ฿39')).toBeInTheDocument();
  });
});
