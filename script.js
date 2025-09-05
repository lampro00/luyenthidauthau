// Lấy các phần tử HTML cần thiếtqqqqqqqqqqqqqqqqqqq
const quizDiv = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultsDiv = document.getElementById("results");

// Biến toàn cục để lưu trữ mảng câu hỏi đã được xáo trộn
let shuffledQuestions = [];

// Hàm để hiển thị câu hỏi
function displayQuestions() {
  // Sắp xếp ngẫu nhiên mảng questions và lấy 40 câu đầu tiên
  shuffledQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 40);

  const output = [];

  // Duyệt qua từng câu hỏi
  shuffledQuestions.forEach((currentQuestion, questionNumber) => {
    const options = [];

    // Tạo các nút radio cho từng đáp án
    currentQuestion.options.forEach((option) => {
      options.push(
        `<label>
                    <input type="radio" name="question${questionNumber}" value="${option}">
                    ${option}
                </label>`
      );
    });

    // Thêm câu hỏi và các đáp án vào mảng output
    output.push(
      `<div class="question">
                <p>Câu ${questionNumber + 1}: ${currentQuestion.question}</p>
                <div class="options">${options.join("")}</div>
            </div>`
    );
  });

  // Hiển thị các câu hỏi lên trang web
  quizDiv.innerHTML = output.join("");
}

// Hàm chấm điểm
function checkAnswers() {
  const questionsElements = quizDiv.querySelectorAll(".question");
  let numCorrect = 0;

  // Duyệt qua từng câu hỏi để kiểm tra đáp án
  questionsElements.forEach((questionEl, questionNumber) => {
    const selectedOption = questionEl.querySelector(
      `input[name="question${questionNumber}"]:checked`
    );

    // Kiểm tra xem người dùng đã chọn đáp án chưa
    if (selectedOption) {
      const userAnswer = selectedOption.value;
      // Lấy đáp án đúng từ mảng câu hỏi đã được xáo trộn
      const correctAnswer = shuffledQuestions[questionNumber].answer;

      if (userAnswer === correctAnswer) {
        numCorrect++;
        // Thêm class 'correct' để tô màu đáp án đúng
        questionEl.classList.add("correct-answer");
        selectedOption.parentElement.style.backgroundColor = "#d4edda"; // Màu xanh lá cây
      } else {
        // Thêm class 'incorrect' để tô màu đáp án sai
        questionEl.classList.add("incorrect-answer");
        selectedOption.parentElement.style.backgroundColor = "#f8d7da"; // Màu đỏ
        // Hiển thị đáp án đúng
        const correctOptionLabel = questionEl.querySelector(
          `input[value="${correctAnswer}"]`
        ).parentElement;
        correctOptionLabel.style.backgroundColor = "#d4edda"; // Màu xanh lá cây
      }
    }
  });

  // Hiển thị kết quả
  resultsDiv.style.display = "block";
  resultsDiv.innerHTML = `Bạn đã trả lời đúng ${numCorrect} trên ${questionsElements.length} câu.`;
  alert(
    `Bạn đã trả lời đúng ${numCorrect} trên ${questionsElements.length} câu.`
  );
}

// Bắt đầu hiển thị câu hỏi khi trang tải xong
displayQuestions();

// Lắng nghe sự kiện click nút "Nộp bài"
submitButton.addEventListener("click", checkAnswers);
