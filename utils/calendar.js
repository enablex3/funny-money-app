import range from "./index";

class Calendar {
  static calendarPage(date) {
    const dayIndexOfFirst = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const numberOfDaysInPreviousMonth = new Date(
      date.getMonth() === 0 ? date.getFullYear() - 1 : date.getFullYear(),
      date.getMonth() === 0 ? 12 : date.getMonth(),
      0
    ).getDate();
    const previousMonthDates = [
      ...range(numberOfDaysInPreviousMonth - dayIndexOfFirst + 1, numberOfDaysInPreviousMonth)
    ];
    const numberOfDaysInCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const currentMonthDates = [...range(1, numberOfDaysInCurrentMonth)];
    const numberOfDaysInNextMonth = 42 - numberOfDaysInCurrentMonth - previousMonthDates.length;
    const nextMonthDates = [...range(1, numberOfDaysInNextMonth)];

    return {
      previous: previousMonthDates.map(
        previousDate =>
          new Date(
            date.getMonth() === 0 ? date.getFullYear() - 1 : date.getFullYear(),
            date.getMonth() === 0 ? 11 : date.getMonth() - 1,
            previousDate
          )
      ),
      current: currentMonthDates.map(currentDate => new Date(date.getFullYear(), date.getMonth(), currentDate)),
      next: nextMonthDates.map(
        nextDate =>
          new Date(
            date.getMonth() === 11 ? date.getFullYear() + 1 : date.getFullYear(),
            date.getMonth() === 11 ? 0 : date.getMonth() + 1,
            nextDate
          )
      )
    };
  }

  static rows(date) {
    const calendar = this.calendarPage(date);
    const page = [...calendar.previous, ...calendar.current, ...calendar.next];

    return [
      page.slice(0, 7),
      page.slice(7, 14),
      page.slice(14, 21),
      page.slice(21, 28),
      page.slice(28, 35),
      page.slice(35, 42)
    ];
  }

  static decrementYear(date) {
    return new Date(date.getFullYear() - 1, date.getMonth(), date.getDate());
  }

  static incrementYear(date) {
    return new Date(date.getFullYear() + 1, date.getMonth(), date.getDate());
  }

  static decrementMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() === 0 ? 11 : date.getMonth() - 1, date.getDate());
  }

  static incrementMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() === 11 ? 0 : date.getMonth() + 1, date.getDate());
  }
}

export default Calendar;
