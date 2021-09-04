const username = document.getElementById("username");
const submit = document.getElementById("btn");
const error = document.getElementById("error");

const questions = [
    "How do you rate work culture here?",
    "How do you rate the support during COVID pandemic?",
    "How do you rate the Technology workshops?",
    "How do you rate the Company's Management during COVID?",
    "How do you rate the work-life balance?",
];

submit.addEventListener("click", () => {
    if (username.value) {
        const user = new User(username.value);
        if (user.checkValueFilled()) {
            console.log("Retriving the data");
            user.getFeedBackData();
            user.showFeedBackData();
        } else {
            error.innerHTML = "You have not selected answer for a question";
        }
    } else {
        error.innerHTML = "You have not selected answer for a question";
        return;
    }
});

class Feedback {
    feedbackData = {};

    updateAnswers(feedbackData) {
        this.feedbackData = feedbackData;
    }

    showFeedBackData() {
        console.log(this.feedbackData);
        for (let i = 0; i < 5; i++) {
            localStorage.setItem(questions[i], this.feedbackData[i]);
        }

        document.getElementById("fb").reset();
    }

    // write function to get the data from UI here
    getFeedBackData() {
        // let num = 1;
        for (let i = 1; i <= 5; i++) {
            var getSelectedValue = document.querySelector(
                `input[name="choice-${i}"]:checked`
            );
            this.feedbackData[i - 1] = getSelectedValue.value;
        }
    }
    checkValueFilled() {
        for (let i = 1; i <= 5; i++) {
            var getSelectedValue = document.querySelector(
                `input[name="choice-${i}"]:checked`
            );
            if (getSelectedValue === null) {
                return false;
            }
        }
        return true;
    }
}

class User extends Feedback {
    username;
    constructor(username) {
        super();
        this.username = username;
    }
    showData() {
        console.log("USERNAME IS : " + this.username);
    }
}