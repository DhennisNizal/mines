import styled from "styled-components";

export const Wrapper = styled.div`
  height: auto;
  width: 100%;
  margin: 2rem 0;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 500px;

  .input-type {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  h2 {
    margin: 0;
    font-weight: 500;
    font-size: 1.1rem;
  }

  .button-wrapper {
    display: flex;
    gap: 1rem;
    width: 100%;
  }

  /* General button styles for combo type buttons */
  .button-wrapper button {
    height: 2.5rem;
    padding: 0 1rem;
    border-radius: 0.5rem;
    border: 1px solid #ddd;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    flex: 1;
    transition: all 0.2s;
  }

  .button-wrapper button:hover {
    border-color: #666;
  }

  .button-wrapper .active {
    background-color: #111;
    color: white;
    border-color: #111;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    border: 1px solid #e0e0e0;
    border-radius: 0.75rem;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  .numbers,
  .bets {
    display: flex;
    gap: 0.5rem;
  }

  input,
  select {
    height: 2.5rem;
    padding: 0 0.75rem;
    border-radius: 0.5rem;
    border: 1px solid #ddd;
    width: 100%;
    font-size: 1rem;
    background: white;
    transition: border-color 0.2s;
  }

  input:focus,
  select:focus {
    outline: none;
    border-color: #111;
  }

  /* Specific styles for Add Bet button */
  .addBet-button {
    width: 100%;
    height: 2.75rem !important;
    align-self: center;
    margin: 0.5rem 0;
    background-color: #111;
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.2s;
    font-size: 1rem;
  }

  .addBet-button:hover {
    background-color: #333;
  }

  .bets-summary {
    margin-top: 1rem;
  }

  .summary-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding-bottom: 0.75rem;
    border-bottom: 2px solid #e0e0e0;
  }

  .summary-title {
    font-size: 1.2rem;
    font-weight: 600;
  }

  /* Clear button specific styles */
  .clear-button {
    height: 2.25rem !important;
    background-color: #dc2626;
    color: white;
    border: none;
    padding: 0 1rem;
    border-radius: 0.5rem;
    font-weight: 500;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .clear-button:hover {
    background-color: #b91c1c;
  }

  .no-bets {
    text-align: center;
    color: #666;
    padding: 2rem;
    font-style: italic;
    background: #f8f9fa;
    border-radius: 0.5rem;
    margin-top: 1rem;
  }

  .error {
    color: #dc2626;
    font-size: 0.85rem;
    margin-top: 0.25rem;
    padding: 0.5rem;
    background: #fef2f2;
    border-radius: 0.25rem;
    border: 1px solid #fecaca;
  }

  .bet-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .bet-item {
    background: white;
    padding: 1rem;
    border-radius: 0.75rem;
    border: 1px solid #e5e5e5;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .bet-item:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  }

  .bet-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
  }

  .combination {
    font-weight: 700;
    font-size: 1.3rem;
    color: #111;
  }

  .bet-rank {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: #10b981;
    color: white;
    border-radius: 50%;
    font-size: 0.8rem;
    font-weight: 600;
    margin-right: 0.5rem;
  }

  .bet-type-badge {
    background: #f3f4f6;
    color: #4b5563;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    font-weight: 500;
  }

  .bet-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    padding: 0.75rem;
    background: #f8fafc;
    border-radius: 0.5rem;
  }

  .bet-amount {
    display: flex;
    flex-direction: column;
  }

  .bet-label {
    font-size: 0.8rem;
    color: #6b7280;
    margin-bottom: 0.25rem;
  }

  .tumbok-amount {
    font-weight: 700;
    font-size: 1.1rem;
    color: #059669;
  }

  .sahod-amount {
    font-weight: 700;
    font-size: 1.1rem;
    color: #2563eb;
  }

  .bet-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.75rem;
    padding-top: 0.75rem;
    border-top: 1px solid #e5e5e5;
  }

  .total-label {
    font-weight: 600;
    color: #111;
  }

  .total-amount {
    font-weight: 800;
    font-size: 1.2rem;
    color: #111;
  }

  .highest-bet {
    border: 2px solid #f59e0b;
    background: linear-gradient(to right, #fff7ed, white);
  }

  .highest-badge {
    background: #f59e0b;
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    font-weight: 600;
  }
`;
