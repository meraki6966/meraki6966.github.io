/**
 * This script runs after the HTML document has been fully loaded.
 * It adds interactivity to the website, specifically for the step-by-step
 * diagram and the FAQ accordion.
 */
document.addEventListener('DOMContentLoaded', function () {
    
    // --- Interactive Step-by-Step Diagram Logic ---
    const steps = document.querySelectorAll('.step-circle');
    const stepContents = document.querySelectorAll('.step-content');

    // Add a click event listener to each step circle
    steps.forEach(step => {
        step.addEventListener('click', () => {
            // Get the number of the clicked step from its ID (e.g., "step-1" -> "1")
            const targetId = step.id.split('-')[1];

            // Update the visual state of all step circles
            steps.forEach(s => {
                s.classList.remove('active', 'bg-blue-500', 'text-white');
                s.classList.add('bg-gray-200', 'text-gray-500');
            });
            
            // Make the clicked step the "active" one
            step.classList.add('active', 'bg-blue-500', 'text-white');
            step.classList.remove('bg-gray-200', 'text-gray-500');

            // Show the corresponding content for the active step
            stepContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `content-${targetId}`) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // --- FAQ Accordion Logic ---
    const faqItems = document.querySelectorAll('.faq-item');

    // Add a click event listener to each FAQ question
    faqItems.forEach(item => {
        const question = item.querySelector('.question');
        question.addEventListener('click', () => {
            // First, close any other FAQ items that are currently open
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('open')) {
                    otherItem.classList.remove('open');
                }
            });
            
            // Then, toggle the 'open' class on the clicked item to show/hide the answer
            item.classList.toggle('open');
        });
    });
});
