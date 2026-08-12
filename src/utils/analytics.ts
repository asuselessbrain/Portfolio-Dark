// Privacy-friendly GA4 Analytics Wrapper
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

interface CustomWindow {
  gtag?: (command: string, targetId: string, options?: Record<string, unknown>) => void;
}

const getWindowWithGtag = (): CustomWindow | null => {
  if (typeof window === "undefined") return null;
  return window as unknown as CustomWindow;
};

// Log page views
export const pageview = (url: string) => {
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics] PageView: ${url}`);
    return;
  }

  const win = getWindowWithGtag();
  if (GA_TRACKING_ID && win && win.gtag) {
    win.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Log specific custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics] Event: ${action} | Category: ${category} | Label: ${label} | Value: ${value}`);
    return;
  }

  const win = getWindowWithGtag();
  if (GA_TRACKING_ID && win && win.gtag) {
    win.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Specific Conversion Tracking Helpers
export const trackResumeDownload = () => {
  event({
    action: "resume_download",
    category: "conversion",
    label: "Resume CV PDF Downloaded",
  });
};

export const trackContactSubmission = () => {
  event({
    action: "contact_form_submission",
    category: "conversion",
    label: "Secure Uplink Transmitted Successfully",
  });
};

export const trackProjectClick = (projectId: string, projectTitle: string) => {
  event({
    action: "view_project_details",
    category: "engagement",
    label: `${projectId} - ${projectTitle}`,
  });
};
