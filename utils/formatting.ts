import moment, { Moment } from "moment";

export const formatDate = (value: Moment | number, isTimeShown?: boolean) =>
    moment(value).format(isTimeShown ? "D.M.YYYY H:mm" : "D.M.YYYY");

export const getPercents = (value: number, range: number) =>
    Math.round((100 / range) * value);
