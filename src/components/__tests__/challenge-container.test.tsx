import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ChallengeContainer, { ChallengeSection } from '../challenge-container';

describe('ChallengeContainer', () => {
  it('renders the title and children correctly', () => {
    render(
      <ChallengeContainer title="Test Challenge">
        <div data-testid="test-child">Test Content</div>
      </ChallengeContainer>
    );

    // Check if the title is rendered
    expect(screen.getByText('Test Challenge')).toBeInTheDocument();
    
    // Check if the children are rendered
    expect(screen.getByTestId('test-child')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom className when provided', () => {
    const { container } = render(
      <ChallengeContainer title="Test Challenge" className="custom-class">
        <div>Test Content</div>
      </ChallengeContainer>
    );

    // Check if the custom class is applied
    const mainElement = container.firstChild as HTMLElement;
    expect(mainElement.className).toContain('custom-class');
  });
});

describe('ChallengeSection', () => {
  it('renders the section title and children correctly', () => {
    render(
      <ChallengeSection title="Section Title">
        <p data-testid="section-content">Section Content</p>
      </ChallengeSection>
    );

    // Check if the section title is rendered
    expect(screen.getByText('Section Title')).toBeInTheDocument();
    
    // Check if the section children are rendered
    expect(screen.getByTestId('section-content')).toBeInTheDocument();
    expect(screen.getByText('Section Content')).toBeInTheDocument();
  });

  it('applies custom className when provided', () => {
    const { container } = render(
      <ChallengeSection title="Section Title" className="custom-section-class">
        <div>Section Content</div>
      </ChallengeSection>
    );

    // Check if the custom class is applied
    const sectionElement = container.firstChild as HTMLElement;
    expect(sectionElement.className).toContain('custom-section-class');
  });
});
