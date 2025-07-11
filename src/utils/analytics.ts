/**
 * Tracks visitor information for analytics
 */
export const trackVisitor = async () => {
  try {
    // Send data to API
    const response = await fetch("https://test.bheemchand.com/api/visitors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // The controller doesn't require any data, as it only uses IP address
      body: JSON.stringify({}),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      console.error("Failed to track visitor:", data.message);
    }
  } catch (error) {
    // Silent fail to not disrupt user experience
    console.error("Error tracking visitor:", error);
  }
};