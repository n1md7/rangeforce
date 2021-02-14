import moment from 'moment';

export const monthDateRanges = (currentDate = new Date()): [string, string] => {
    const startDate = moment(currentDate).startOf('month').format('DD/MM/YYYY');
    const endDate = moment(currentDate).endOf('month').format('DD/MM/YYYY');

    return [startDate, endDate];
};

export const weekDateRanges = (currentDate = new Date()): [string, string] => {
    const firstDay = moment(currentDate).startOf('isoWeek').format('DD/MM/YYYY');
    const lastDay = moment(currentDate).endOf('isoWeek').format('DD/MM/YYYY');

    return [firstDay, lastDay];
};

export const activityDateFormat = (date: Date): string => {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); //Month from 0 to 11
    const yyyy = String(date.getFullYear());

    return `${dd}/${mm}/${yyyy}`;
};

