export const monthStartDate = (currentDate = new Date()): Date => {
    return new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
};

export const monthDateRanges = (currentDate = new Date()): [Date, Date] => {
    const startDate = monthStartDate(currentDate);
    const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    return [startDate, endDate];
};

export const weekDateRanges = (currentDate = new Date()): [Date, Date] => {
    const first = currentDate.getDate() - currentDate.getDay() + 1;
    const last = first + 7;
    const firstDay = new Date(currentDate.setDate(first));
    const lastDay = new Date(currentDate.setDate(last));

    return [firstDay, lastDay];
};

export const activityDateFormat = (date: Date): string => {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); //Month from 0 to 11
    const yyyy = String(date.getFullYear());

    return `${dd}/${mm}/${yyyy}`;
};

