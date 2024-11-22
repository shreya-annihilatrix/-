export type Activity = {
  type: 'alert' | 'report' | 'resolve';
  user: string;
  action: string;
  time: string;
  category: string;
  urgency: string;
}