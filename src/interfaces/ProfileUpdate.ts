export interface ProfileUpdate {
  fullname: string

  /** valid email */
  email: string

  send_product_emails: boolean
  send_weekly_report: boolean
  send_timer_notifications: boolean
  store_start_and_stop_time: boolean
  beginning_of_week: DayOfWeek | number
  timezone: string
  timeofday_format: TimeFormat | string
  date_format: DateFormat | string

  current_password: string
  password: string
}

// TODO check this days
export enum DayOfWeek {
  MONDAY = 0,
  TUESDAY = 1,
  WEDNESDAY = 2,
  THURSDAY = 3,
  FRIDAY = 4,
  SATURDAY = 5,
  SUNDAY = 6,
}

export enum TimeFormat {
  /** for 24-hour format */
  H_MM = 'H:mm',
  /** for 12-hour format (AM/PM) */
  H_MM_A = 'h:mm A',
}

export enum DateFormat {
  YYYY_MM_DD = 'YYYY-MM-DD',

  DD_MM_YYYY_WITH_DOTS = 'DD.MM.YYYY',
  DD_MM_YYYY_WITH_HYPENS = 'DD-MM-YYYY',
  DD_MM_YYYY_WITH_SLASH = 'DD/MM/YYYY',

  MM_DD_YYYY_WITH_SLASH = 'MM/DD/YYYY',
  MM_DD_YYYY_WITH_HYPENS = 'MM-DD-YYYY',
}
