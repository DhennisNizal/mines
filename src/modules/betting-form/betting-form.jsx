import { useState, useEffect } from "react";
import { Wrapper, Content } from "./styles";
import {
  generateCombinationsForBet,
  getTayaDetails,
  validateBetInput,
} from "../../helpers/helpers";

const BettingForm = () => {
  const [type, setType] = useState(2);
  const [tayaType, setTayaType] = useState("taya");
  const [numbers, setNumbers] = useState(["", ""]);
  const [tumbok, setTumbok] = useState("");
  const [sahod, setSahod] = useState("");
  const [gitnaTaya, setGitnaTaya] = useState("");
  const [bets, setBets] = useState([]);
  const [error, setError] = useState("");
  const [sortedBets, setSortedBets] = useState([]);

  useEffect(() => {
    // Sort bets from highest to lowest total amount
    const sorted = [...bets].sort((a, b) => {
      const totalA = a.tumbok + a.sahod;
      const totalB = b.tumbok + b.sahod;
      return totalB - totalA;
    });
    setSortedBets(sorted);
  }, [bets]);

  const handleNumberChange = (index, value) => {
    if (value === "" || /^\d{0,2}$/.test(value)) {
      const numValue = parseInt(value);

      if (value !== "" && !isNaN(numValue)) {
        if (numValue < 1 || numValue > 38) {
          return;
        }
      }

      const newNumbers = [...numbers];
      newNumbers[index] = value;
      setNumbers(newNumbers);
    }
  };

  const handleAddBet = () => {
    const validation = validateBetInput(
      type,
      numbers,
      tayaType,
      gitnaTaya,
      tumbok,
      sahod
    );

    if (!validation.isValid) {
      setError(validation.errors);
      return;
    }

    setError("");

    const tayaDetails = getTayaDetails(tayaType, gitnaTaya, tumbok, sahod);
    const combinations = generateCombinationsForBet(
      type,
      validation.numericValues
    );

    setBets((prevBets) => {
      const updatedBets = [...prevBets];

      combinations.forEach((comb) => {
        const { originalCombination, reversedCombination } = comb;

        const existingOriginalIndex = updatedBets.findIndex(
          (bet) => bet.originalCombination === originalCombination
        );

        const existingReversedAsOriginalIndex = updatedBets.findIndex(
          (bet) => bet.originalCombination === reversedCombination
        );

        if (existingOriginalIndex > -1) {
          updatedBets[existingOriginalIndex] = {
            ...updatedBets[existingOriginalIndex],
            tumbok:
              updatedBets[existingOriginalIndex].tumbok +
              tayaDetails.tumbokAmount,
            sahod:
              updatedBets[existingOriginalIndex].sahod +
              tayaDetails.sahodAmount,
            lastAdded: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          };
        } else if (existingReversedAsOriginalIndex > -1) {
          updatedBets[existingReversedAsOriginalIndex] = {
            ...updatedBets[existingReversedAsOriginalIndex],
            tumbok:
              updatedBets[existingReversedAsOriginalIndex].tumbok +
              tayaDetails.sahodAmount,
            sahod:
              updatedBets[existingReversedAsOriginalIndex].sahod +
              tayaDetails.tumbokAmount,
            lastAdded: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          };
        } else {
          updatedBets.push({
            id: Date.now() + Math.random(),
            originalCombination: originalCombination,
            tumbok: tayaDetails.tumbokAmount,
            sahod: tayaDetails.sahodAmount,
            type: tayaDetails.type,
            betType: type === 2 ? "kasa" : "tres kasas",
            lastAdded: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          });
        }
      });

      return updatedBets;
    });

    // Reset form
    setNumbers(Array(type).fill(""));
    setTumbok("");
    setSahod("");
    setGitnaTaya("");
  };

  const handleClearBets = () => {
    setBets([]);
  };

  const handleTypeChange = (newType) => {
    setType(newType);
    setNumbers(Array(newType).fill(""));
    setError("");
  };

  const handleTayaTypeChange = (newTayaType) => {
    setTayaType(newTayaType);
    setTumbok("");
    setSahod("");
    setGitnaTaya("");
    setError("");
  };

  return (
    <Wrapper>
      <Content>
        {/* Combination Type */}
        <div className="input-type">
          <h2>Choose Combination Type</h2>
          <div className="button-wrapper">
            <button
              className={type === 2 ? "active" : ""}
              onClick={() => handleTypeChange(2)}
            >
              Kasa
            </button>
            <button
              className={type === 3 ? "active" : ""}
              onClick={() => handleTypeChange(3)}
            >
              Tres Kasas
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="form">
          <h2>Numero</h2>
          <div className="numbers">
            {Array.from({ length: type }).map((_, index) => (
              <input
                key={index}
                type="number"
                placeholder={`#${index + 1}`}
                min="0"
                max="99"
                value={numbers[index]}
                onChange={(e) => handleNumberChange(index, e.target.value)}
              />
            ))}
          </div>

          <h2>Taya</h2>
          <select
            value={tayaType}
            onChange={(e) => handleTayaTypeChange(e.target.value)}
          >
            <option value="taya">Custom Bet</option>
            <option value="gitna">Gitna</option>
            <option value="20-10">20-10</option>
            <option value="20-5">20-5</option>
            <option value="15-10">15-10</option>
            <option value="15-5">15-5</option>
            <option value="12-3">12-3</option>
            <option value="10-5">10-5</option>
            <option value="8-2">8-2</option>
            <option value="7-3">7-3</option>
            <option value="5-2">5-2</option>
            <option value="4-1">4-1</option>
          </select>

          {tayaType === "taya" && (
            <div className="bets">
              <input
                type="number"
                placeholder="Tumbok"
                value={tumbok}
                onChange={(e) => setTumbok(e.target.value)}
                min="0"
              />
              <input
                type="number"
                placeholder="Sahod"
                value={sahod}
                onChange={(e) => setSahod(e.target.value)}
                min="0"
              />
            </div>
          )}

          {tayaType === "gitna" && (
            <div className="bets">
              <input
                type="number"
                placeholder="Gitna Bet"
                value={gitnaTaya}
                onChange={(e) => setGitnaTaya(e.target.value)}
                min="0"
              />
            </div>
          )}

          {error && <div className="error">{error}</div>}

          <button className="addBet-button" onClick={handleAddBet}>
            Add Bet
          </button>
        </div>

        {/* Bets Summary */}
        <div className="bets-summary">
          <div className="summary-header">
            <div className="summary-title">Live Bets Summary</div>
            <button className="clear-button" onClick={handleClearBets}>
              Clear All
            </button>
          </div>

          {sortedBets.length === 0 ? (
            <div className="no-bets">No bets placed yet</div>
          ) : (
            <div className="bet-list">
              {sortedBets.map((bet, index) => {
                const total = bet.tumbok + bet.sahod;
                const isHighest = index === 0;

                return (
                  <div
                    key={bet.id}
                    className={`bet-item ${isHighest ? "highest-bet" : ""}`}
                  >
                    <div className="bet-header">
                      <div>
                        <span className="bet-rank">{index + 1}</span>
                        <span className="combination">
                          {bet.originalCombination}
                        </span>
                      </div>
                      <div>
                        {isHighest && (
                          <span
                            className="highest-badge"
                            style={{ marginLeft: "0.5rem" }}
                          >
                            Highest
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="bet-details">
                      <div className="bet-amount">
                        <div className="bet-label">Tumbok</div>
                        <div className="tumbok-amount">
                          ₱{bet.tumbok.toFixed(2)}
                        </div>
                      </div>
                      <div className="bet-amount">
                        <div className="bet-label">Sahod</div>
                        <div className="sahod-amount">
                          ₱{bet.sahod.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </Content>
    </Wrapper>
  );
};

export default BettingForm;
