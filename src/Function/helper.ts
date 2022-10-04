export const cleanNumber = (phone: string | number) => {
    if (phone === undefined) {
        return "";
    }
    const number = phone.toString().replace(/[^\d]/g, "");
    if (isNaN(Number(number))) {
        return "";
    }
    return number;
};

export const formatDate = (
    date: Date,
    type: "USAFormatStringShort" | "DateMySql"
): string => {
    const yearNumeric = date.toLocaleString("en-US", {
        year: "numeric",
    });
    const monthSortName = date.toLocaleString("en-US", {
        month: "short",
    });
    const dayDigit = date.toLocaleString("en-US", {
        day: "2-digit",
    });

    const monthDigit = date.toLocaleString("en-US", {
        month: "2-digit",
    });

    switch (type) {
        case "USAFormatStringShort":
            return monthSortName + ", " + dayDigit + " " + yearNumeric;
        case "DateMySql":
            return yearNumeric + "/" + monthDigit + "/" + dayDigit;
    }
};
