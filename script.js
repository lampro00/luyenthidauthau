// Lấy các phần tử HTML cần thiếtqqqqqqqqqqqqqqqqqqq
const quizDiv = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultsDiv = document.getElementById("results");
const selectElement = document.getElementById("questionCount");
const Viewquestion = document.getElementById("view-question");
const navItem = document.getElementsByClassName("v-question");
// Biến toàn cục để lưu trữ mảng câu hỏi đã được xáo trộn
let shuffledQuestions = [];
function markAnswered(index) {
  const navItem = document.querySelector(`.v-question[data-index="${index}"]`);
  if (navItem) navItem.classList.add("answered");
}
// Hàm để hiển thị câu hỏi
function displayQuestions() {
  const choice = selectElement.value;
  count = parseInt(choice);
  console.log(count);
  // Sắp xếp ngẫu nhiên mảng questions và lấy 40 câu đầu tiên
  shuffledQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, count);

  const output = [];
  const outputviewqs = [];
  // Duyệt qua từng câu hỏi
  shuffledQuestions.forEach((currentQuestion, index) => {
    const options = [];

    // Tạo các nút radio cho từng đáp án
    currentQuestion.options.forEach((option, indexan) => {
      options.push(
        `<label>
                    <input type="radio" name="question${index}" onchange="markAnswered(${index})" value="${option}" >
                    ${option}
                </label>`,
      );
    });

    // Thêm câu hỏi và các đáp án vào mảng output
    output.push(
      `<div class="question" id="qs-${index}"> 
      <p>Câu ${index + 1}: ${currentQuestion.question}</p>
      <div class="options">${options.join("")}</div>
   </div>`,
    );

    outputviewqs.push(
      `<div class="v-question" data-index="${index}">
      <a class="numberquestion">${index + 1}</a>
   </div>`,
    );
  });

  // document.getElementById("setup-box").style.display = "none";
  // Hiển thị các câu hỏi lên trang web
  quizDiv.innerHTML = output.join("");
  Viewquestion.innerHTML = outputviewqs.join("");
}
Viewquestion.addEventListener("click", function (e) {
  // Sử dụng .closest để đảm bảo dù click vào thẻ <a> hay <div> thì vẫn lấy được thẻ .v-question
  const targetNav = e.target.closest(".v-question");

  if (targetNav) {
    // Lấy chỉ số index từ thuộc tính data-index hoặc id
    const index = targetNav.getAttribute("data-index");
    console.log("Đang cuộn đến câu hỏi số:", parseInt(index) + 1);

    // Tìm thẻ div câu hỏi tương ứng
    const targetElement = document.getElementById(`qs-${index}`);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      // Hiệu ứng highlight nháy vàng để người dùng nhận biết
      targetElement.style.backgroundColor = "#fff3cd";
      setTimeout(() => {
        targetElement.style.backgroundColor = "";
      }, 800);
    }
  }
});
// Hàm chấm điểm
function checkAnswers() {
  const questionsElements = quizDiv.querySelectorAll(".question");
  let numCorrect = 0;

  // Duyệt qua từng câu hỏi để kiểm tra đáp án
  questionsElements.forEach((questionEl, index) => {
    console.log(questionEl);
    const navItem = document.querySelector(
      `.v-question[data-index="${index}"]`,
    );
    const selectedOption = questionEl.querySelector(
      `input[name="question${index}"]:checked`,
    );

    // Kiểm tra xem người dùng đã chọn đáp án chưa
    if (selectedOption) {
      navItem.classList.remove("answered");
      const userAnswer = selectedOption.value;
      // Lấy đáp án đúng từ mảng câu hỏi đã được xáo trộn
      const correctAnswer = shuffledQuestions[index].answer;

      if (userAnswer[0] === correctAnswer[0]) {
        navItem.classList.add("Co_answered");
        numCorrect++;
        // Thêm class 'correct' để tô màu đáp án đúng
        questionEl.classList.add("correct-answer");
        selectedOption.parentElement.style.backgroundColor = "#d4edda"; // Màu xanh lá cây
      } else {
        // Thêm class 'incorrect' để tô màu đáp án sai

        navItem.classList.add("in_answered");
        questionEl.classList.add("incorrect-answer");
        selectedOption.parentElement.style.backgroundColor = "#f8d7da"; // Màu đỏ
        // Hiển thị đáp án đúng
        const options = questionEl.querySelectorAll("input");
        options.forEach((opt) => {
          // Kiểm tra nếu ký tự đầu của option trùng với đáp án đúng
          if (opt.value.trim()[0] === correctAnswer[0]) {
            opt.parentElement.style.backgroundColor = "#d4edda";
            opt.parentElement.style.fontWeight = "bold"; // Làm nổi bật thêm
          }
        });
      }
    } else {
      navItem.classList.add("in_answered");
      const correctAnswer = shuffledQuestions[index].answer;
      const options = questionEl.querySelectorAll("input");
      options.forEach((opt) => {
        // Kiểm tra nếu ký tự đầu của option trùng với đáp án đúng
        if (opt.value.trim()[0] === correctAnswer[0]) {
          opt.parentElement.style.backgroundColor = "#d4edda";
          opt.parentElement.style.fontWeight = "bold"; // Làm nổi bật thêm
        }
      });
    }
  });

  // Hiển thị kết quả
  resultsDiv.style.display = "block";
  resultsDiv.innerHTML = `Bạn đã trả lời đúng ${numCorrect} trên ${questionsElements.length} câu.`;
}

// Bắt đầu hiển thị câu hỏi khi trang tải xong

// Lắng nghe sự kiện click nút "Nộp bài"
submitButton.addEventListener("click", checkAnswers);

// 1. Cấu hình ban đầu
const totalTime = 60 * 60;
let timeLeft = totalTime;
const timerDisplay = document.getElementById("timer");

/**
 * 2. Hàm bổ trợ: Cập nhật giao diện đồng hồ
 * Giúp code sạch hơn, không phải viết lại logic tính toán nhiều lần
 */
function updateTimerDisplay() {
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  // Sử dụng padStart để luôn hiển thị 2 chữ số (ví dụ: 09 thay vì 9)
  timerDisplay.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

/**
 * 3. Hàm bắt đầu đếm ngược
 */
function start() {
  // Hiển thị thời gian ban đầu ngay lập tức trước khi chạy setInterval
  updateTimerDisplay();

  const countdown = setInterval(() => {
    // Giảm thời gian trước
    timeLeft--;

    if (timeLeft < 0) {
      // Dừng đồng hồ
      clearInterval(countdown);
      timerDisplay.textContent = "HẾT GIỜ!";
      timerDisplay.style.color = "red"; // Hiệu ứng chữ đỏ khi hết giờ

      // Tự động nộp bài
      if (typeof checkAnswers === "function") {
        checkAnswers();
      }
    } else {
      // Cập nhật lại giao diện sau mỗi giây
      updateTimerDisplay();

      // Cảnh báo khi còn dưới 1 phút (tùy chọn)
      if (timeLeft < 60) {
        timerDisplay.style.color = "orange";
      }
    }
  }, 1000);
}
// const countdown = setInterval(() => {
//   if (timeLeft <= 0) {
//     clearInterval(countdown);
//     timerDisplay.textContent = "HẾT GIỜ!";
//     submitExam();
//   } else {
//     const hours = Math.floor(timeLeft / 3600);
//     const minutes = Math.floor((timeLeft % 3600) / 60);
//     const seconds = timeLeft % 60;

//     // Định dạng hiển thị giờ:phút:giây
//     const displayTime = `${String(hours).padStart(2, "0")}:${String(
//       minutes
//     ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

//     timerDisplay.textContent = displayTime;
//     timeLeft--;
//   }
// }, 1000);

// Hàm nộp bài
function submitExam() {
  // Ngừng bộ đếm khi nộp bài thủ công
  checkAnswers();
}
submitButton.addEventListener("click", checkAnswers);
