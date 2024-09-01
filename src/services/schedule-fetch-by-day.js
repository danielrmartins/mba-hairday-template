import dayjs from "dayjs";

import { apiConfig } from "./api-config";

export async function scheduleFetchByDay({ date }) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/schedules`);
    const schedules = await response.json();
    const dailySchedules = schedules.filter(schedule => dayjs(date).isSame(schedule.when, 'day'));

    return dailySchedules;
  } catch (error) {
    console.log(error);
    alert('Erro ao buscar agendamentos. Tente novamente mais tarde.');
  }
}