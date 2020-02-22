import { DateFormat, DayOfWeek, TimeFormat } from './ProfileUpdate'

import { Client } from './Client'
import { Invitation } from './Invitation'
import { NewBlogPost } from './NewBlogPost'
import { Project } from './Project'
import { Tag } from './Tag'
import { TimeEntry } from './TimeEntry'
import { Timezone } from '@ninevillage/timezones'
import { Workspace } from './Workspace'

export interface User {
  id: number
  api_token: string
  default_wid: number
  email: string
  fullname: string
  jquery_timeofday_format: string
  jquery_date_format: string
  timeofday_format: TimeFormat | string
  date_format: DateFormat | string
  store_start_and_stop_time: boolean
  beginning_of_week: DayOfWeek | number
  language: string
  image_url: string
  sidebar_piechart: boolean
  at: Date
  retention: number
  record_timeline: boolean
  render_timeline: boolean
  timeline_enabled: boolean
  timeline_experiment: boolean
  timezone: string
  openid_enabled: boolean
  send_product_emails: boolean
  send_weekly_report: boolean
  send_timer_notifications: boolean

  new_blog_post: NewBlogPost
  invitation: Invitation

  time_entries: TimeEntry[]
  projects: Project[]
  tags: Tag[]
  workspaces: Workspace[]
  clients: Client[]
}
