export const getOriginalCanonicalCombination = (num1, num2) => {
  return `${num1}-${num2}`;
};

export const getReversedCombination = (num1, num2) => {
  return `${num2}-${num1}`;
};

export const generateCombinationsForBet = (type, numValues) => {
  const combinations = [];

  if (type === 2 && numValues.length >= 2) {
    const [num1, num2] = numValues;

    const original = getOriginalCanonicalCombination(num1, num2);
    const reversed = getReversedCombination(num1, num2);

    combinations.push({
      originalCombination: original,
      reversedCombination: reversed,
      tumbok: true,
    });
  } else if (type === 3 && numValues.length >= 3) {
    const [num1, num2, num3] = numValues;

    const pairs = [
      [num1, num2],
      [num1, num3],
      [num2, num3],
    ];

    pairs.forEach((pair) => {
      const [a, b] = pair;
      const original = getOriginalCanonicalCombination(a, b);
      const reversed = getReversedCombination(a, b);

      combinations.push({
        originalCombination: original,
        reversedCombination: reversed,
        tumbok: true,
      });
    });
  }

  return combinations;
};

export const getTayaDetails = (
  tayaType,
  gitnaTaya = "",
  tumbok = "",
  sahod = ""
) => {
  if (tayaType === "gitna") {
    const taya = parseInt(gitnaTaya) || 0;
    return {
      tumbokAmount: taya / 2,
      sahodAmount: taya / 2,
      type: "gitna",
    };
  } else if (tayaType === "taya") {
    return {
      tumbokAmount: parseInt(tumbok) || 0,
      sahodAmount: parseInt(sahod) || 0,
      type: "regular",
    };
  } else {
    const [t, s] = tayaType.split("-");
    return {
      tumbokAmount: parseInt(t) || 0,
      sahodAmount: parseInt(s) || 0,
      type: "preset",
    };
  }
};

export const validateBetInput = (
  type,
  numbers,
  tayaType,
  gitnaTaya,
  tumbok,
  sahod
) => {
  const errors = [];

  // Validate numbers
  const numValues = numbers.filter((n) => n.trim() !== "");
  if (numValues.length < type) {
    errors.push(`Please enter ${type} valid numbers`);
  }

  const numericValues = numValues.map((n) => {
    const num = parseInt(n);
    if (isNaN(num) || num < 1 || num > 38) {
      errors.push(`Please enter valid numbers between 0-99`);
      return null;
    }
    return num;
  });

  if (numericValues.includes(null)) {
    return { isValid: false, numericValues: [], errors };
  }

  // Validate taya
  if (tayaType === "gitna") {
    const taya = parseInt(gitnaTaya);
    if (isNaN(taya) || taya <= 0) {
      errors.push("Please enter a valid gitna taya amount");
    }
  }

  if (tayaType === "taya") {
    const tumbokVal = parseInt(tumbok);
    const sahodVal = parseInt(sahod);
    if (
      isNaN(tumbokVal) ||
      isNaN(sahodVal) ||
      tumbokVal <= 0 ||
      sahodVal <= 0
    ) {
      errors.push("Please enter valid tumbok and sahod amounts");
    }
  }

  return {
    isValid: errors.length === 0,
    numericValues,
    errors: errors.join(". "),
  };
};
