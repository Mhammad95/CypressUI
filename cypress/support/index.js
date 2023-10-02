import dashboardLocators from "../integration/features/locators/dashboardLocator.json"
import dashboardData from "../integration/features/fixtures/dashboardData.json"
import errorsData from "../integration/features/fixtures/errorsData.json"


const createCustomErrorMessage = (error, runnableObj, customErrorMsg, pageLink) => {


    // Configure Cypress to handle uncaught exceptions
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Log the error message to the console
      console.error('Uncaught Exception:', err.message);

      // Return false to prevent Cypress from failing the test
      return false;
    });
    const requestBody = {
        channel: 'C058A8XPG87',
        text: customErrorMsg + '\n Link: ' + pageLink
    };
    //stage bearer :xoxb-2930724989842-5301889467638-Dx2TNNqtdK452JuSu5v1uVI3
    const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxNjc4MTAwNTc3Mzg2IiwiaWF0IjoxNjkxMDg4MzU5fQ.1V-pIVGjLve161Or2jbcv1tre4f37ZiiZzqYNnYVYig',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    };

    const apiUrl = 'https://slack.com/api/chat.postMessage/stop';
    
    fetch(apiUrl, requestOptions)
    .then(response => {
        // Check if the request was successful (status code 200)
        if (response.ok) {
            return response.json(); // Parse the response body as JSON
        } else {
            throw new Error('API request failed');
        }
    })
    .then(data => {
        // Process the API response data
        console.log(data);
        // Perform further operations with the data
    })
    .catch(error => {
        // Handle any errors that occurred during the request
        console.error(error);
    });

    
    const messageArr = [
        `Context: ${runnableObj.parent.title}`,
        `Test: ${runnableObj.title}`,
        `----------`,
          `${error.message}`,                            // actual Cypress error message
        `\n${customErrorMsg}`,                         // additional empty line to get some space
        `\n${pageLink}`,  
    ]

    return messageArr.join('\n')
}

Cypress.on('fail', (err, runnable) => {

    let customErrorMsg;

    if (err.message.includes(dashboardLocators.postList)) {
        customErrorMsg = dashboardData.dashboardPageLoadTimeError
    }
    else if (err.message.includes(dashboardLocators.postsomethig)) {
        customErrorMsg = dashboardData.createPostPopupError
    }
    else if (err.message.includes(dashboardLocators.postTextarea)) {
        customErrorMsg = dashboardData.enterPostTextError
    }
    else if (err.message.includes(dashboardLocators.postPublishButton)) {
        customErrorMsg = dashboardData.postPublishError
    }
    else if (err.message.includes(dashboardLocators.postOptionMenuButton)) {
        customErrorMsg = dashboardData.postOptionMenuError
    }
    else if (err.message.includes(dashboardLocators.postDeleteButton)) {
        customErrorMsg = dashboardData.postDeleteError
    }
    else if (err.message.includes(dashboardLocators.postDelConfirmButton)) {
        customErrorMsg = dashboardData.postDelConfirmationError
    }

    //Widgets
    else if (err.message.includes(dashboardLocators.marqueeSlider)) {
        customErrorMsg = dashboardData.marqueeSliderError
    }
    else if (err.message.includes(dashboardLocators.profileCard)) {
        customErrorMsg = dashboardData.profileCardError
    }
    else if (err.message.includes(dashboardLocators.nftCard)) {
        customErrorMsg = dashboardData.nftCardError
    }
    else if (err.message.includes(dashboardLocators.investmentCard)) {
        customErrorMsg = dashboardData.investmentCardError
    }
    else if (err.message.includes(dashboardLocators.widgetsScroller)) {
        customErrorMsg = dashboardData.widgetsScrollerError
    }
    else if (err.message.includes(dashboardLocators.addWidgetButton)) {
        customErrorMsg = dashboardData.addWidgetError
    }
    else if (err.message.includes(dashboardLocators.selectWidgetType)) {
        customErrorMsg = dashboardData.selectWidgetTypeError
    }
    else if (err.message.includes(dashboardLocators.selectScreenerButton)) {
        customErrorMsg = dashboardData.selectScreenerError
    }
    else if (err.message.includes(dashboardLocators.nextButton)) {
        customErrorMsg = dashboardData.nextButtonError
    }
    else if (err.message.includes(dashboardLocators.stockList)) {
        customErrorMsg = dashboardData.stockListError
    }
    else if (err.message.includes(dashboardLocators.submitWidgetButton)) {
        customErrorMsg = dashboardData.submitWidgetError
    }
    else if (err.message.includes(dashboardLocators.widgetOptionMenuButton)) {
        customErrorMsg = dashboardData.widgetOptionMenuError
    }
    else if (err.message.includes(dashboardLocators.widgetDeleteButton)) {
        customErrorMsg = dashboardData.widgetDeleteError
    }
    else if (err.message.includes(dashboardLocators.widgetDelConfirmButton)) {
        customErrorMsg = dashboardData.widgetDelConfirmError
    }

    else if (err.message.includes(errorsData.networkError)) {
        customErrorMsg = errorsData.internetIssue
    }
    else {
        customErrorMsg = errorsData.noCustomMsgFound
    }

    const customErrorMessage = createCustomErrorMessage(err, runnable, customErrorMsg, dashboardData.pageLink)
    const customError = err
    customError.message = customErrorMessage

    throw customError

})




