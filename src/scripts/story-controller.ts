class StoryController {
  private steps: NodeListOf<HTMLElement>;
  private screens: NodeListOf<HTMLElement>;
  private observer: IntersectionObserver;

  constructor() {
    this.steps = document.querySelectorAll('[data-step-id]');
    this.screens = document.querySelectorAll('.story-device-screen');
    
    if (!this.steps.length || !this.screens.length) {
      console.warn('StoryController: No steps or screens found.');
      return;
    }

    this.initObserver();
    this.observeSteps();
  }

  private initObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepId = entry.target.getAttribute('data-step-id');
            this.setActiveScreen(stepId);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the step is visible
    );
  }

  private observeSteps(): void {
    this.steps.forEach((step) => this.observer.observe(step));
  }

  private setActiveScreen(activeStepId: string | null): void {
    this.screens.forEach((screen) => {
      const screenStepId = screen.getAttribute('data-step-id');
      if (screenStepId === activeStepId) {
        screen.classList.add('is-active');
      } else {
        screen.classList.remove('is-active');
      }
    });
  }
}

// Initialize the controller when the DOM is ready.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new StoryController());
} else {
  new StoryController();
}
