export interface StoryStepContent {
  id: string;
  headline?: string;
  text?: string;
  screenshot: {
    src: string;
    alt: string;
  };
  logo?: boolean;
  scrollIndicator?: boolean;
}
