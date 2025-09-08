const questions = [
  {
    question:
      "Câu 1. Trường hợp nào sau đây bắt buộc phải lựa chọn nhà thầu theo quy định tại Luật Đấu thầu?",
    options: [
      "A. Gói thầu thuộc dự án sử dụng vốn ngân sách nhà nước của cơ quan nhà nước",
      "B. Lựa chọn nhà thầu của doanh nghiệp nhà nước không sử dụng vốn ngân sách nhà nước",
      "C. Lựa chọn nhà thầu của đơn vị sự nghiệp công lập tự bảo đảm chi thường xuyên không sử dụng ngân",
      "D. Gói thầu mua sắm điện nước, xăng dầu của cơ quan nhà nước",
    ],
    answer:
      "A. Gói thầu thuộc dự án sử dụng vốn ngân sách nhà nước của cơ quan nhà nước",
  },
  {
    question:
      "Câu 2. Chọn phương án đúng về phạm vi điều chỉnh của Luật Đấu thầu?",
    options: [
      "A. Quy định về quản lý nhà nước đối với hoạt động đấu thầu",
      "B. Quy định về thẩm quyền và trách nhiệm của các cơ quan, tổ chức, cá nhân trong hoạt động đấu thầu",
      "C. Quy định về hoạt động lựa chọn nhà thầu thực hiện gói thầu, hoạt động lựa chọn nhà đầu tư thực hiện",
      "D. Tất cả phương án trên đều đúng",
    ],
    answer: "D. Tất cả phương án trên đều đúng",
  },
  {
    question:
      "Câu 3. Trường hợp nào sau đây không thuộc đối tượng áp dụng của Luật Đấu thầu?",
    options: [
      "A. Gói thầu mua thuốc, hoá chất, vật tư xét nghiệm sử dụng nguồn ngân sách nhà nước của bệnh viện",
      "B. Gói thầu xây dựng đường giao thông sử dụng vốn đầu tư công do Ban Quản lý dự án đầu tư xây dựng",
      "C. Gói thầu mua sắm trang thiết bị làm việc sử dụng vốn nhà nước của Văn phòng UBND tỉnh A",
      "D. Hoạt động mua phần mềm kế toán của hộ kinh doanh cá thể",
    ],
    answer: "D. Hoạt động mua phần mềm kế toán của hộ kinh doanh cá thể",
  },
  {
    question:
      "Câu 4. Theo quy định pháp luật về đấu thầu, gói thầu nào được xếp vào gói thầu cung cấp dịch vụ tư vấn ?",
    options: [
      "A. Thiết kế và cung cấp hệ thống xử lý nước thải",
      "B. Gói thầu lập nhiệm vụ quy hoạch vùng",
      "C. Gói thầu quảng cáo trên nền tảng xã hội và phát sóng trên VTV",
      "D. Gói thầu mua phần mềm kế toán MISA",
    ],
    answer: "B. Gói thầu lập nhiệm vụ quy hoạch vùng",
  },
  {
    question: "Câu 5. Gói thầu nào là gói thầu cung cấp dịch vụ phi tư vấn",
    options: [
      "A. Gói thầu in sổ công tác của tỉnh A",
      "B. Gói thầu thuê kiểm toán dự án",
      "C. Gói thầu mua phần mềm kế toán hỗ trợ doanh nghiệp khởi nghiệp sáng tạo, doanh nghiệp nhỏ do phụ",
      "D. Gói thầu xây dựng trụ sở làm việc của tỉnh A.",
    ],
    answer: "A. Gói thầu in sổ công tác của tỉnh A",
  },
  {
    question: "Câu 6. Theo quy định pháp luật về đấu thầu, đấu thầu là gì?",
    options: [
      "A. Là quá trình lựa chọn nhà thầu để ký kết, thực hiện hợp đồng cung cấp dịch vụ tư vấn, dịch vụ phi tư",
      "B. Là quá trình lựa chọn nhà đầu tư để ký kết, thực hiện hợp đồng dự án đầu tư kinh doanh trên cơ sở bảo",
      "C. Là quá trình lựa chọn đơn vị để thực hiện hợp đồng thông qua các quy trình, thủ tục do pháp luật đấu",
      "D. Phương án A và B đều đúng",
    ],
    answer: "D. Phương án A và B đều đúng",
  },
  {
    question: "Câu 7. Đấu thầu quốc tế là gì?",
    options: [
      "A. Là hoạt động đấu thầu mà nhà thầu trong nước, nước ngoài được tham dự thầu",
      "B. Là hoạt động đấu thầu mà nhà thầu trong nước, nước ngoài được tham dự thầu, trong đó nhà thầu trong nước bắt buộc phải liên danh với nhà thầu nước ngoài",
      "C. Là hoạt động đấu thầu chỉ nhà thầu quốc tế được phép tham dự thầu",
      "D. Là hoạt động đấu thầu chỉ nhà thầu trong nước được phép tham dự thầu",
    ],
    answer:
      "A. Là hoạt động đấu thầu mà nhà thầu trong nước, nước ngoài được tham dự thầu",
  },
  {
    question: "Câu 8. Giá đề nghị trúng thầu là gì?",
    options: [
      "A. Là giá dự thầu của nhà thầu ghi trong quyết định phê duyệt kết quả lựa chọn nhà thầu.",
      "B. Là giá dự thầu của nhà thầu được đề nghị trúng thầu sau khi đã được sửa lỗi, hiệu chỉnh sai lệch theo yêu cầu của hồ sơ mời thầu, hồ sơ yêu cầu, trừ đi giá trị giảm giá (nếu có)",
      "C. Là giá dự thầu của nhà thầu chưa tính sửa lỗi, hiệu chỉnh sai lệch và giá trị giảm giá (nếu có)",
      "D. Là giá trị ghi trong hợp đồng giữa chủ đầu tư và nhà thầu",
    ],
    answer:
      "B. Là giá dự thầu của nhà thầu được đề nghị trúng thầu sau khi đã được sửa lỗi, hiệu chỉnh sai lệch",
  },
  {
    question: "Câu 9. Theo quy định pháp luật về đấu thầu, hàng hóa gồm?",
    options: [
      "A. Máy móc, thiết bị, nguyên liệu, nhiên liệu, vật liệu, vật tư, phụ tùng; sản phẩm; phương tiện; hàng tiêu",
      "B. Thuốc, hóa chất, vật tư xét nghiệm, thiết bị y tế",
      "C. Phương án A và B đều đúng",
      "D. Logistics, bảo hiểm, quảng cáo, nghiệm thu chạy thử, chụp ảnh vệ tinh",
    ],
    answer: "C. Phương án A và B đều đúng",
  },
  {
    question:
      "Câu 10. Đối tượng được hưởng ưu đãi trong lựa chọn nhà thầu là gì?",
    options: [
      "A. Hàng hóa có xuất xứ Việt Nam",
      "B. Nhà thầu trong nước sản xuất hàng hóa có xuất xứ Việt Nam phù hợp với hồ sơ mời thầu",
      "C. Sản phẩm, dịch vụ thân thiện môi trường theo quy định của pháp luật về bảo vệ môi trường",
      "D. Tất cả các phương án trên đều đúng",
    ],
    answer: "D. Tất cả các phương án trên đều đúng",
  },
  {
    question:
      "Câu 11. Nhà thầu trong nước nào được hưởng ưu đãi trong lựa chọn nhà thầu?",
    options: [
      "A. Nhà thầu trong nước sản xuất hàng hóa có xuất xứ Việt Nam phù hợp với hồ sơ mời thầu",
      "B. Nhà thầu trong nước tham dự thầu với tư cách độc lập hoặc liên danh với nhà thầu trong nước khác khi",
      "C. Nhà thầu có sử dụng lao động nữ, thương binh, người khuyết tật hoặc người dân tộc thiểu số",
      "D. Tất cả các phương án trên đều đúng",
    ],
    answer: "D. Tất cả các phương án trên đều đúng",
  },
  {
    question:
      "Câu 12. Trường hợp nào sau đây cơ quan, tổ chức, doanh nghiệp được tự quyết định việc lựa chọn",
    options: [
      "A. Thực hiện gói thầu thuộc dự án sử dụng vốn đầu tư công của cơ quan nhà nước",
      "B. Thực hiện gói thầu thuộc dự án sử dụng vốn đầu tư công của đơn vị sự nghiệp công lập bảo đảm một",
      "C. Thực hiện gói thầu thuộc dự án sử dụng vốn ngân sách nhà nước của doanh nghiệp nhà nước",
      "D. Lựa chọn nhà thầu của doanh nghiệp nhà nước không sử dụng vốn ngân sách nhà nước, đơn vị",
    ],
    answer:
      "D. Lựa chọn nhà thầu của doanh nghiệp nhà nước không sử dụng vốn ngân sách nhà nước, đơn vị",
  },
  {
    question:
      "Câu13. Điều kiện để tổ chức đấu thầu quốc tế lựa chọn nhà thầu thực hiện gói thầu mua sắm hàng hóa gì ?",
    options: [
      "A. Gói thầu mua sắm hàng hóa thông dụng, đơn giản, có sẵn trên thị trường",
      "B. Gói thầu mua sắm hàng hóa mà hàng hóa đó trong nước sản xuất được và đáp ứng các yêu cầu về kỹ thuật, chất lượng, giá nhưng chủ đầu tư yêu cầu phải mua hàng hóa nhập khẩu",
      "C. Gói thầu mua sắm hàng hóa mà hàng hóa đó trong nước không sản xuất được hoặc sản xuất được nhưng không đáp ứng một trong các yêu cầu về kỹ thuật, chất lượng, giá",
      "D. Gói thầu mua sắm hàng hóa thông dụng đã được nhập khẩu và chào bán tại Việt Nam nhưng hàng hóa đó trong nước không sản xuất được",
    ],
    answer:
      "C. Gói thầu mua sắm hàng hóa mà hàng hóa đó trong nước không sản xuất được hoặc sản xuất được nhưng không đáp ứng một trong các yêu cầu về kỹ thuật, chất lượng, giá",
  },
  {
    question: "Câu14. Ngôn ngữ sử dụng đối với đấu thầu quốc tế là gì?",
    options: [
      "A. Tiếng Việt",
      "B. Tiếng Đức",
      "C. Tiếng Anh hoặc tiếng Việt và tiếng Anh",
      "D. Tiếng Đức hoặc tiếng Anh",
    ],
    answer: "C. Tiếng Anh hoặc tiếng Việt và tiếng Anh",
  },
  {
    question:
      "Câu 15. Đối với đấu thầu quốc tế, trường hợp ngôn ngữ sử dụng trong hồ sơ mời thầu là tiếng Việt và tiếng Anh thì khi tham dự thầu, nhà thầu sử dụng ngôn ngữ gì?",
    options: [
      "A. Chỉ tiếng Việt",
      "B. Chỉ tiếng Anh",
      "C. Tiếng Việt hoặc tiếng Anh",
      "D. Bắt buộc cả tiếng Việt và tiếng Anh",
    ],
    answer: "C. Tiếng Việt hoặc tiếng Anh",
  },
  {
    question:
      "Câu 16. Trong trường hợp hủy thầu, toàn bộ hồ sơ liên quan đến quá trình lựa chọn nhà thầu của gói thầu đó có cần phải lưu trữ không?",
    options: [
      "A. Không cần lưu trữ, hủy hồ sơ ngay sau khi quyết định hủy thầu được ban hành nhưng phải đảm bảo",
      "B. Không cần lưu trữ, trả lại hồ sơ cho nhà thầu theo nguyên trạng ngay sau khi quyết định hủy thầu được",
      "C. Có cần lưu trữ, trong thời hạn 05 năm kể từ ngày quyết định hủy thầu được ban hành",
      "D. Có cần lưu trữ, trong thời hạn 03 năm kể từ ngày quyết định hủy thầu được ban hành",
    ],
    answer:
      "C. Có cần lưu trữ, trong thời hạn 05 năm kể từ ngày quyết định hủy thầu được ban hành",
  },
  {
    question:
      "Câu 17. Trường hợp hồ sơ đề xuất về tài chính của Nhà thầu không vượt qua bước đánh giá về kỹ thuật, Nhà thầu từ chối nhận lại hồ sơ đề xuất của mình thì Chủ đầu tư phải xử lý như thế nào?",
    options: [
      "A. Chủ đầu tư xem xét, quyết định việc hủy hồ sơ nhưng phải đảm bảo thông tin không bị tiết lộ",
      "B. Chủ đầu tư phải lưu trữ theo quy định của pháp luật về lưu trữ",
      "C. Chủ đầu tư lưu trữ tối thiểu 05 năm",
      "D. Tất cả các phương án trên đều sai",
    ],
    answer:
      "A. Chủ đầu tư xem xét, quyết định việc hủy hồ sơ nhưng phải đảm bảo thông tin không bị tiết lộ",
  },
  {
    question:
      "Câu 18. Hồ sơ hoàn công và quyết toán của gói thầu được lưu trữ theo quy định nào?",
    options: [
      "A. Quy định nội bộ của nhà thầu",
      "B. Quy định của tư vấn giám sát",
      "C. Quy định của pháp luật về lưu trữ",
      "D. Tất cả phương án trên đều sai",
    ],
    answer: "C. Quy định của pháp luật về lưu trữ",
  },
  {
    question:
      "Câu19. Đối với gói thầu xây lắp đấu thầu không qua mạng, hồ sơ đề xuất tài chính của nhà thầu không được lựa chọn sẽ được trả lại khi nào?",
    options: [
      "A. Khi gửi thư mời thương thảo",
      "B. Khi kết thúc giai đoạn đánh giá kỹ thuật",
      "C. Khi hoàn trả bảo đảm dự thầu của nhà thầu không được lựa chọn hoặc đăng tải kết quả lựa",
      "D. Khi ký hợp đồng",
    ],
    answer:
      "C. Khi hoàn trả bảo đảm dự thầu của nhà thầu không được lựa chọn hoặc đăng tải kết quả lựa",
  },
  {
    question:
      "Câu 20. Đối với đấu thầu quốc tế, hồ sơ mời thầu được phát hành như thế nào?",
    options: [
      "A. HSMT được phát hành trên Hệ thống mạng đấu thầu quốc gia; Nhà thầu nộp tiền mua bản điện",
      "B. HSMT được bán vào giờ hành chính từ thứ 2 tới thứ 6 tại địa chỉ do Chủ đầu tư quy định",
      "C. Phương án A và B đều đúng",
      "D. Phương án A và B đều sai",
    ],
    answer:
      "A. HSMT được phát hành trên Hệ thống mạng đấu thầu quốc gia; Nhà thầu nộp tiền mua bản điện",
  },
  {
    question:
      "Câu 21. Đối với gói thầu sử dụng vốn ngân sách nhà nước, tiền bán bản điện tử hồ sơ mời thầu, hồ sơ yêu cầu sẽ được xử lý như thế nào?",
    options: [
      "A. Sử dụng theo quy chế tài chính của chủ đầu tư",
      "B. Nộp vào ngân sách nhà nước theo quy định của Luật Ngân sách nhà nước",
      "C. Sử dụng theo cơ chế khoán chi",
      "D. Tất cả các đáp án trên đều sai",
    ],
    answer:
      "B. Nộp vào ngân sách nhà nước theo quy định của Luật Ngân sách nhà nước",
  },
  {
    question:
      "Câu 22. Chi phí đăng tải quyết định phê duyệt kế hoạch lựa chọn nhà thầu và quyết định phê duyệt kết quả lựa chọn nhà thầu lên Hệ thống mạng đấu thầu quốc gia đối với gói thầu chỉ định thầu là bao nhiêu?",
    options: [
      "A.  220.000 đồng/1 gói thầu (đã bao gồm thuế giá trị gia tăng)",
      "B. 330.000 đồng/1 gói thầu (đã bao gồm thuế giá trị gia tăng)",
      "C. Miễn phí",
      "D. 110.000 đồng/1 gói thầu (đã bao gồm thuế giá trị gia tăng)",
    ],
    answer: "C. Miễn phí",
  },
  {
    question:
      "Câu 23. Thành viên tổ chuyên gia cần có tối thiểu bao nhiêu năm kinh nghiệm trong lĩnh vực liên quan ?",
    options: [
      "A. 01 năm công tác thuộc một trong các lĩnh vực liên quan đến nội dung pháp lý, kỹ thuật, tài chính của",
      "B. 02 năm công tác thuộc một trong các lĩnh vực liên quan đến nội dung pháp lý, kỹ thuật, tài chính của",
      "C. 03 năm công tác thuộc một trong các lĩnh vực liên quan đến nội dung pháp lý, kỹ thuật, tài chính",
      "D. Không có quy định về số năm kinh nghiệm",
    ],
    answer:
      "C. 03 năm công tác thuộc một trong các lĩnh vực liên quan đến nội dung pháp lý, kỹ thuật, tài chính",
  },
  {
    question:
      "Câu 24. Bảo đảm cạnh tranh trong đấu thầu thuộc nội dung đánh giá về?",
    options: [
      "A. Tư cách hợp lệ",
      "B. Năng lực, kinh nghiệm",
      "C. Kỹ thuật",
      "D. Tài chính",
    ],
    answer: "A. Tư cách hợp lệ",
  },
  {
    question:
      "Câu 25. Nhà thầu tham gia đấu thầu gói thầu hàng hóa phải độc lập với chủ thể nào sau đây?",
    options: [
      "A. Phải độc lập với nhà thầu tư vấn lập hồ sơ mời thầu gói thầu hàng hóa",
      "B. Phải độc lập với nhà thầu khác khi tham gia đấu thầu rộng rãi",
      "C. Phải độc lập với nhà thầu tư vấn lập kế hoạch tổng thể lựa chọn nhà thầu",
      "D. Phải độc lập với nhà thầu tư vấn lập kế hoạch lựa chọn nhà thầu",
    ],
    answer:
      "A. Phải độc lập với nhà thầu tư vấn lập hồ sơ mời thầu gói thầu hàng hóa",
  },
  {
    question:
      "Câu 26. Nhận định nào sau đây không phù hợp với quy định về bảo đảm cạnh tranh trong đấu thầu ?",
    options: [
      "A. Nhà thầu tham dự thầu phải độc lập với chủ đầu tư, trừ trường hợp: nhà thầu là đơn vị sự nghiệp công",
      "B. Nhà thầu tham dự thầu phải độc lập với nhà thầu tư vấn quản lý dự án, tư vấn giám sát",
      "C. Nhà thầu tham dự thầu phải độc lập với nhà thầu tư vấn lập, thẩm tra, thẩm định hồ sơ thiết kế, dự toán",
      "D. Nhà thầu thực hiện hợp đồng phải độc lập với nhà thầu tư vấn lập kế hoạch lựa chọn nhà thầu.",
    ],
    answer:
      "D. Nhà thầu thực hiện hợp đồng phải độc lập với nhà thầu tư vấn lập kế hoạch lựa chọn nhà thầu.",
  },
  {
    question:
      "Câu 27. Nội  dung nào sau đây không thuộc quy định về bảo đảm cạnh tranh trong đấu thầu khi nhà thầu tham dự thầu đấu thầu rộng rãi gói thầu EPC, EP, EC?",
    options: [
      "A. Nhà thầu tham dự thầu phải độc lập với nhà thầu lập, thẩm tra thiết kế FEED",
      "B. Nhà thầu tham dự thầu phải độc lập với nhà thầu lập, thẩm tra báo cáo nghiên cứu khả thi trong trường",
      "C. Nhà thầu tham dự thầu phải độc lập với nhà thầu lập, thẩm tra báo cáo kinh tế kỹ thuật trong trường",
      "D. Nhà thầu tham dự thầu phải độc lập với nhà thầu khác cùng tham dự đấu thầu rộng rãi",
    ],
    answer:
      "D. Nhà thầu tham dự thầu phải độc lập với nhà thầu khác cùng tham dự đấu thầu rộng rãi",
  },
  {
    question:
      "Câu 28. Nội dung nào là nội dung đánh giá tính hợp lệ của hồ sơ dự thầu?",
    options: [
      "A. Nhân sự chủ chốt",
      "B. Hiệu lực của hồ sơ dự thầu",
      "C. Năng lực tài chính",
      "D. Việc thực hiện nghĩa vụ kê khai thuế, nộp thuế",
    ],
    answer: "B. Hiệu lực của hồ sơ dự thầu",
  },
  {
    question:
      "Câu 29. Nội dung nào không phải là tiêu chuẩn đánh giá về tính hợp lệ của hồ sơ dự thầu gói thầu tư vấn?",
    options: [
      "A. Hiệu lực của hồ sơ đề xuất về kỹ thuật đáp ứng yêu cầu theo quy định trong hồ sơ mời thầu",
      "B. Có bản gốc hồ sơ đề xuất về kỹ thuật",
      "C. Bảo đảm dự thầu hợp lệ",
      "D. Đã thực hiện nghĩa vụ kê khai thuế và nộp thuế",
    ],
    answer: "D. Đã thực hiện nghĩa vụ kê khai thuế và nộp thuế",
  },
  {
    question:
      "Câu 30. Đối với gói thầu mua sắm hàng hóa, xây lắp, phi tư vấn, phương pháp để đánh giá về năng lực và kinh nghiệm là?",
    options: [
      "A. Sử dụng tiêu chí đạt, không đạt",
      "B. Sử dụng phương pháp chấm điểm",
      "C. Kết hợp cả hai phương pháp: tiêu chí đạt, không đạt và phương pháp chấm điểm",
      "D. Phương pháp dựa trên kỹ thuật",
    ],
    answer: "A. Sử dụng tiêu chí đạt, không đạt",
  },
  {
    question:
      "Câu 31. Tiêu chuẩn đánh giá năng lực kinh nghiệm đối với gói thầu mua sắm hàng hóa bao gồm?",
    options: [
      "A. Doanh thu bình quân 3 năm gần nhất",
      "B. Giấy phép bán hàng của nhà sản xuất",
      "C. Số năm thành lập của doanh nghiệp",
      "D. Năng lực quản lý của doanh nghiệp",
    ],
    answer: "A. Doanh thu bình quân 3 năm gần nhất",
  },
  {
    question:
      "Câu 32. Nội dung nào là tiêu chuẩn đánh giá về năng lực và kinh nghiệm không bắt buộc đối với gói thầu mua sắm hàng hóa?",
    options: [
      "A. Kinh nghiệm thực hiện hợp đồng cung cấp hàng hóa tương tự",
      "B. Giá trị tài sản ròng của nhà thầu",
      "C. Doanh thu của nhà thầu",
      "D. Việc thực hiện nghĩa vụ kê khai thuế, nộp thuế",
    ],
    answer: "B. Giá trị tài sản ròng của nhà thầu",
  },
  {
    question:
      "Câu 33. Nội dung nào là tiêu chuẩn đánh giá đánh giá về năng lực và kinh nghiệm bắt buộc đối với gói thầu xây lắp tổ chức đấu thầu rộng rãi không qua mạng?",
    options: [
      "A. Có bản gốc hồ sơ dự thầu",
      "B. Có tên trong danh sách ngắn",
      "C. Năng lực tài chính",
      "D. Có bảo đảm dự thầu hợp lệ",
    ],
    answer: "C. Năng lực tài chính",
  },
  {
    question:
      "Câu 34. Tiêu chuẩn đánh giá về kỹ thuật được yêu cầu về nhãn hiệu theo nhóm nhãn hiệu cho nguyên nhiên vật liệu, vật tư và các yếu tố đầu vào đối với trường hợp nào?",
    options: [
      "A. Nội dung công việc xây lắp thuộc gói thầu xây lắp, gói thầu EC",
      "B. Nội dung công việc xây lắp thuộc gói thầu EPC",
      "C. Nội dung công việc xây lắp thuộc gói thầu EPC và gói thầu PC",
      "D. Nội dung công việc xây lắp thuộc gói thầu xây lắp và gói thầu PC",
    ],
    answer: "A. Nội dung công việc xây lắp thuộc gói thầu xây lắp, gói thầu EC",
  },
  {
    question:
      "Câu 35. Nội dung nào không phải là tiêu chuẩn đánh giá về kỹ thuật của gói thầu tư vấn?",
    options: [
      "A. Giải pháp phương pháp luận",
      "B. Uy tín của nhà thầu thông qua việc tham dự thầu, kết quả thực hiện hợp đồng của nhà thầu",
      "C. Đã thực hiện nghĩa vụ kê khai thuế và nộp thuế",
      "D. Kinh nghiệm và năng lực nhà thầu",
    ],
    answer: "C. Đã thực hiện nghĩa vụ kê khai thuế và nộp thuế",
  },
  {
    question: "Câu 36. Một trong các căn cứ lập hồ sơ mời thầu là?",
    options: [
      "A. Báo giá của nhà thầu",
      "B. Quyết định mua sắm được phê duyệt",
      "C. Kế hoạch lựa chọn nhà thầu được duyệt",
      "D. Phương án A và B đều đúng",
    ],
    answer: "C. Kế hoạch lựa chọn nhà thầu được duyệt",
  },
  {
    question:
      "Câu 37. Đối với gói thầu cung cấp dịch vụ tư vấn, phương pháp đánh giá nào không được áp dụng?",
    options: [
      "A. Giá thấp nhất",
      "B. Giá đánh giá",
      "C. Kết hợp giữa kỹ thuật và giá",
      "D. Giá cố định",
    ],
    answer: "B. Giá đánh giá",
  },
  {
    question: "Câu 38. Nội dung nào sau đây không thuộc hồ sơ mời thầu?",
    options: [
      "A. Chỉ dẫn nhà thầu, tùy chọn mua thêm",
      "B. Bảng dữ liệu đấu thầu",
      "C. Phạm vi cung cấp, yêu cầu về kỹ thuật",
      "D. Biên bản hoàn thiện hợp đồng",
    ],
    answer: "D. Biên bản hoàn thiện hợp đồng",
  },
  {
    question:
      "Câu 39. Trường hợp nào hồ sơ mời thầu được đưa ra yêu cầu về giấy phép bán hàng?",
    options: [
      "A. Hàng hóa thông thường, có sẵn trên thị trường",
      "B. Hàng hóa nhập khẩu",
      "C. Hàng hóa đặc thù, phức tạp cần gắn với trách nhiệm của nhà sản xuất",
      "D. Hàng hóa có giá trị lớn",
    ],
    answer:
      "C. Hàng hóa đặc thù, phức tạp cần gắn với trách nhiệm của nhà sản xuất",
  },
  {
    question:
      "Câu 40. Trong quá trình đánh giá hồ sơ dự thầu gói thầu áp dụng đấu thầu rộng rãi, chủ đầu tư phát hiện người đại diện theo pháp luật của 02 nhà thầu là anh em ruột được xem xét như thế nào?",
    options: [
      "A. Thuộc hành vi bị cấm trong đấu thầu",
      "B. Không đáp ứng yêu cầu về bảo đảm cạnh tranh trong đấu thầu",
      "C. Hồ sơ dự thầu của một trong hai nhà thầu không được xem xét",
      "D. Không thuộc hành vi bị cấm, không vi phạm quy định về bảo đảm cạnh tranh trong đấu thầu",
    ],
    answer:
      "D. Không thuộc hành vi bị cấm, không vi phạm quy định về bảo đảm cạnh tranh trong đấu thầu",
  },
  {
    question:
      "Câu 41. Việc đánh giá nhà thầu đang trong thời gian bị cấm tham dự thầu thuộc nội dung đánh giá về ?",
    options: [
      "A. Kỹ thuật",
      "B. Tài chính",
      "C. Tư cách hợp lệ",
      "D. Năng lực, kinh nghiệm",
    ],
    answer: "C. Tư cách hợp lệ",
  },
  {
    question:
      "Câu 42. Khi đánh giá về năng lực kinh nghiệm đối với gói thầu mua sắm hàng hóa, nhà  thầu được",
    options: [
      "A. Nhà thầu được đánh giá đạt tất tiêu chuẩn đánh giá về năng lực và kinh nghiệm trong hồ sơ mời",
      "B. Nhà thầu đáp ứng một trong các tiêu chuẩn đánh giá về năng lực và kinh nghiệm trong hồ sơ mời thầu",
      "C. Nhà thầu đáp ứng hai phần ba các tiêu chuẩn đánh giá về năng lực và kinh nghiệm trong hồ sơ mời",
      "D. Nhà thầu đáp ứng các tiêu chuẩn đánh giá về năng lực và kinh nghiệm quan trọng trong hồ sơ mời thầu",
    ],
    answer:
      "A. Nhà thầu được đánh giá đạt tất tiêu chuẩn đánh giá về năng lực và kinh nghiệm trong hồ sơ mời",
  },
  {
    question:
      "Câu 43. Hợp đồng theo theo tỷ lệ phần trăm có thể được áp dụng đối với gói thầu  nào sau đây?",
    options: [
      "A. Mua sắm thiết bị y tế",
      "B. Xây dựng công trình",
      "C. Bảo hiểm công trình mà giá trị hợp đồng được xác định chính xác trên cơ sở giá trị công trình",
      "D. Tư vấn giám sát",
    ],
    answer:
      "C. Bảo hiểm công trình mà giá trị hợp đồng được xác định chính xác trên cơ sở giá trị công trình",
  },
  {
    question: "Câu 44. Cơ sở để thanh toán hợp đồng cho nhà thầu là gì?",
    options: [
      "A. Giá hợp đồng và các điều khoản cụ thể về thanh toán được ghi trong hợp đồng",
      "B. Dự toán gói thầu và các điều khoản cụ thể về thanh toán được ghi trong hợp đồng",
      "C. Dự toán gói thầu",
      "D. Phương án A và C đều sai",
    ],
    answer:
      "A. Giá hợp đồng và các điều khoản cụ thể về thanh toán được ghi trong hợp đồng",
  },
  {
    question:
      "Câu 45. Nhà thầu không được hoàn trả bảo đảm thực hiện hợp đồng trong trường hợp nào?",
    options: [
      "A. Từ chối thực hiện hợp đồng khi hợp đồng đã có hiệu lực",
      "B. Thực hiện hợp đồng chậm tiến độ nhưng vẫn hoàn thành hợp đồng",
      "C. Nhà thầu đề nghị điều chỉnh tiến độ do bất khả kháng",
      "D. Nhà thầu đề xuất thay đổi nhà thầu phụ",
    ],
    answer: "A. Từ chối thực hiện hợp đồng khi hợp đồng đã có hiệu lực",
  },
  {
    question:
      "Câu 46. Trường hợp nào sau đây phải áp dụng bảo đảm thực hiện hợp đồng?",
    options: [
      "A. Nhà thầu cung dịch vụ phi tư vấn",
      "B. Nhà thầu thực hiện gói thầu có giá gói thầu thuộc hạn mức chỉ định thầu",
      "C. Nhà thầu cung cấp dịch vụ tư vấn",
      "D. Nhà thầu được lựa chọn theo hình thức tự thực hiện",
    ],
    answer: "A. Nhà thầu cung dịch vụ phi tư vấn",
  },
  {
    question:
      "Câu 47. Hiện nay, Việt Nam đã mở cửa thị trường mua sắm chính phủ (đấu thầu) trong những hiệp định nào?",
    options: [
      "A. Chỉ Hiệp định Đối tác Toàn diện và Tiến bộ Xuyên Thái Bình Dương (CPTPP)",
      "B. Hiệp định CPTPP và Hiệp định thương mại tự do giữa Cộng hòa xã hội chủ nghĩa Việt Nam và Liên minh Châu Âu (EVFTA)",
      "C. Hiệp định CPTPP, Hiệp định EVFTA và Hiệp định Thương mại Tự do giữa Việt Nam và Liên hiệp Vương quốc Anh và Bắc Ailen (UKVFTA)",
      "D. Tất cả các hiệp định mà Việt Nam là thành viên",
    ],
    answer:
      "C. Hiệp định CPTPP, Hiệp định EVFTA và Hiệp định Thương mại Tự do giữa Việt Nam  và Liên",
  },
  {
    question:
      "Câu 48. Số lượng các nước thành viên Hiệp định Đối tác Toàn diện và Tiến bộ Xuyên Thái Bình Dương (CPTPP) ký kết hiệp định ban đầu là bao nhiêu nước?",
    options: ["A. 8 nước", "B. 9 nước", "C. 11 nước", "D. 12 nước"],
    answer: "C. 11 nước",
  },
  {
    question:
      "Câu 49. Trong các hiệp định dưới đây, hiệp định nào không có quy định về các trường hợp chỉ định thầu?",
    options: [
      "A. Hiệp định Đối tác Toàn diện và Tiến bộ Xuyên Thái Bình Dương (CPTPP)",
      "B. Hiệp định thương mại tự do giữa Cộng hòa xã hội chủ nghĩa Việt Nam và Liên minh Châu Âu",
      "C. Hiệp định EVFTA và Hiệp định Thương mại Tự do giữa Việt Nam  và Liên hiệp Vương quốc Anh và",
      "D. Hiệp định Đối tác Kinh tế Toàn diện Khu vực (RCEP)",
    ],
    answer: "D. Hiệp định Đối tác Kinh tế Toàn diện Khu vực (RCEP)",
  },
  {
    question:
      "Câu 50. Hoạt động nào sau đây không thuộc phạm vi điều chỉnh của Nghị định số 95/2020/NĐ-CP?",
    options: [
      "A. Mua sắm thiết bị văn phòng",
      "B. Thuê dịch vụ tư vấn",
      "C. Thuê quyền sử dụng đất",
      "D. Mua sắm vật tư y tế",
    ],
    answer: "C. Thuê quyền sử dụng đất",
  },
  {
    question:
      "Câu 51. Theo các hiệp định mà Việt Nam có mở cửa thị trường mua sắm chính phủ (đấu thầu), nhà thầu nước ngoài được tham gia đấu thầu tại Việt Nam trong trường hợp nào?",
    options: [
      "A. Tất cả các gói thầu",
      "B. Chỉ gói thầu ODA",
      "C. Gói thầu thuộc phạm vi điều chỉnh của hiệp định",
      "D. Gói thầu có giá trị lớn, phức tạp",
    ],
    answer: "C. Gói thầu thuộc phạm vi điều chỉnh của hiệp định",
  },
  {
    question:
      "Câu 52. Theo quy định tại Nghị định số 95/2020/NĐ-CP, đấu thầu nội khối là?",
    options: [
      "A. Đấu thầu mà chỉ có nhà thầu nội khối được tham dự",
      "B. Đấu thầu cho các dự án trong khối CPTPP",
      "C. Đấu thầu giữa các nước thành viên EVFTA, UKVFTA",
      "D. Đấu thầu trong nước",
    ],
    answer: "A. Đấu thầu mà chỉ có nhà thầu nội khối được tham dự",
  },
  {
    qquestion:
      "Câu 53. Theo quy định tại Nghị định số 09/2022/NĐ-CP, cơ quan mua sắm phải tổ chức đấu thầu nội khối, trừ trường hợp nào?",
    options: [
      "A. Không có nhà thầu trong nước tham gia",
      "B. Giá gói thầu quá lớn",
      "C. Người có thẩm quyền xét thấy cần tổ chức đấu thầu quốc tế để mang lại hiệu quả cao hơn cho dự án, gói thầu",
      "D. Hàng hóa thuộc gói thầu quá phức tạp mà nhà thầu trong nước không đáp ứng được",
    ],
    answer:
      "C. Người có thẩm quyền xét thấy cần tổ chức đấu thầu quốc tế để mang lại hiệu quả cao hơn cho dự",
  },
  {
    question:
      "Câu 54. Theo Thông tư số 21/2022/TT-BKHĐT, khi nào được đưa ra yêu cầu về nhân sự chủ chốt trong gói thầu dịch vụ phi tư vấn?",
    options: [
      "A. Trong mọi trường hợp",
      "B. Khi giá gói thầu lớn",
      "C. Chỉ khi dịch vụ có yếu tố đặc thù, phức tạp cần thiết phải có nhân sự có hiểu biết, nhiều kinh nghiệm đảm nhận",
      "D. Khi có yêu cầu của nhà thầu",
    ],
    answer:
      "C. Chỉ khi dịch vụ có yếu tố đặc thù, phức tạp cần thiết phải có nhân sự có hiểu biết, nhiều kinh",
  },
  {
    question: "Câu 55. Gói thầu mua thuốc là gói thầu nào?",
    options: [
      "A. Gói thầu mua sắm hàng hóa",
      "B. Gói thầu cung cấp dịch vụ phi tư vấn",
      "C. Gói thầu hỗn hợp",
      "D. Gói thầu xây lắp",
    ],
    answer: "A. Gói thầu mua sắm hàng hóa",
  },
  {
    question: "Câu 56. Đàm phán giá được áp dụng trong trường hợp nào sau đây?",
    options: [
      "A. Mua thuốc chỉ có 01 hoặc 02 hãng sản xuất",
      "B. Mua thuốc, thiết bị y tế, vật tư xét nghiệm chỉ có 01 hãng sản xuất",
      "C. Mua hàng hóa chỉ có 01 hãng sản xuất",
      "D. Mua hàng hóa chỉ có 01 hoặc 02 hãng sản xuất",
    ],
    answer: "A. Mua thuốc chỉ có 01 hoặc 02 hãng sản xuất",
  },
  {
    question:
      "Câu 57. Quy định về thời điểm bắt đầu và kết thúc chào giá trực tuyến theo quy trình rút gọn?",
    options: [
      "A. Thời điểm bắt đầu và kết thúc phải trong giờ hành chính.",
      "B. Thời điểm bắt đầu không bắt buộc trong giờ hành chính nhưng kết thúc phải trong giờ hành chính.",
      "C. Thời điểm bắt đầu và kết thúc không bắt buộc trong giờ hành chính.",
      "D. Tất cả phương án trên đều sai",
    ],
    answer:
      "B. Thời điểm bắt đầu không bắt buộc trong giờ hành chính nhưng kết thúc phải trong giờ hành chính.",
  },
  {
    question:
      "Câu 58. Khi đánh giá E-HSDT gói thầu xây lắp đấu thầu rộng rãi qua mạng, trường hợp có sự không thống nhất giữa thông tin về hợp đồng tương tự kê khai trên webform và file tài liệu chứng minh các thông tin về hợp đồng đó thì xử lý như nào?",
    options: [
      "A. Đánh giá nhà thầu không đạt yêu cầu về hợp đồng tương tự",
      "B. Yêu cầu nhà thầu làm rõ E-HSDT trên Hệ thống mạng đấu thầu quốc gia",
      "C. Yêu cầu nhà thầu gửi bổ sung hợp đồng tương tự bằng bản giấy để đánh giá",
      "D. Các phương án trên đều sai",
    ],
    answer:
      "B. Yêu cầu nhà thầu làm rõ E-HSDT trên Hệ thống mạng đấu thầu quốc gia",
  },
  {
    question:
      "Câu 59. Nhà thầu có trách nhiệm kê khai thông tin nào trên Hệ thống mạng đấu thầu quốc gia?",
    options: [
      "A. Thông tin về uy tín của nhà thầu trong việc tham dự thầu",
      "B. Thông tin về vi phạm của nhà thầu",
      "C. Thông tin về năng lực, kinh nghiệm của nhà thầu",
      "D. Cả 3 phương án trên đều đúng",
    ],
    answer: "C. Thông tin về năng lực, kinh nghiệm của nhà thầu",
  },
  {
    question:
      "Câu 60. Nhận định nào sau đây đúng về văn bản điện tử trên Hệ thống mạng đấu thầu quốc gia?",
    options: [
      "A. Văn bản điện tử trên Hệ thống có giá trị theo quy định của pháp luật về giao dịch điện tử, làm cơ sở đối chiếu, so sánh, xác thực thông tin phục vụ công tác đánh giá, thẩm định, thanh tra, kiểm tra, kiểm toán và giải ngân",
      "B. Thời điểm gửi, nhận văn bản điện tử được xác định căn cứ theo thời gian thực ghi lại trên Hệ thống",
      "C. Khi gửi hồ sơ thanh quyết toán đến Kho bạc Nhà nước, nhà thầu không phải cung cấp thông tin, tài liệu cho Kho bạc Nhà nước đối với các thông tin, tài liệu là văn bản điện tử trên Hệ thống",
      "D. Cả 3 phương án trên đều đúng",
    ],
    answer: "D. Cả 3 phương án trên đều đúng",
  },
  {
    question:
      "Câu 61. Ai chịu trách nhiệm đăng tải thông tin chủ yếu của hợp đồng trên Hệ thống mạng đấu thầu quốc gia?",
    options: [
      "A. Bên mời thầu",
      "B. Tổ chuyên gia",
      "C. Tư vấn đấu thầu",
      "D. Chủ đầu tư",
    ],
    answer: "D. Chủ đầu tư",
  },
  {
    question:
      "Câu 62. Trong đấu thầu qua mạng, nhà thầu tư vấn đấu thầu bị khoá tài khoản trong vòng 06 tháng khi thực hiện hành vi nào sau đây?",
    options: [
      "A. Tham gia vào quá trình lập và đánh giá E-HSMT",
      "B. Tham gia vào quá trình thẩm định hồ sơ mời thầu và kết quả lựa chọn nhà thầu",
      "C. Thay chủ đầu tư đăng tải các nội dung thuộc trách nhiệm đăng tải của chủ đầu tư",
      "D. Đăng tải thông tin về năng lực, kinh nghiệm của mình trên Hệ thống mạng đấu thầu quốc gia",
    ],
    answer:
      "C. Thay chủ đầu tư đăng tải các nội dung thuộc trách nhiệm đăng tải của chủ đầu tư",
  },
  {
    question:
      "Câu 63. Chủ đầu tư có trách nhiệm đăng tải thông tin chủ yếu của hợp đồng trên Hệ thống đấu thầu qua mạng quốc gia chậm nhất là?",
    options: [
      "A. 05 ngày làm việc kể từ ngày ký kết hợp đồng",
      "B. 05 ngày làm việc kể từ ngày hợp đồng có hiệu lực",
      "C. 05 ngày kể từ ngày hợp đồng có hiệu lực",
      "D. 05 ngày làm việc kể từ ngày nhà thầu nộp bảo đảm thực hiện hợp đồng",
    ],
    answer: "B. 05 ngày làm việc kể từ ngày hợp đồng có hiệu lực",
  },
  {
    question:
      "Câu 64. Đối với đấu thầu qua mạng, việc trả lời yêu cầu làm rõ E-HSMT được thực hiện theo phương án nào?",
    options: [
      "A. Do tổ chuyên gia thực hiện bằng văn bản",
      "B. Do tổ chuyên gia thực hiện trên Hệ thống mạng đấu thầu quốc gia",
      "C. Do tư vấn đấu thầu thực hiện bằng tài khoản của đơn vị tư vấn",
      "D. Do Chủ đầu tư thực hiện trên Hệ thống mạng đấu thầu quốc gia",
    ],
    answer: "D. Do Chủ đầu tư thực hiện trên Hệ thống mạng đấu thầu quốc gia",
  },
  {
    question:
      "Câu 65. Danh sách nhà thầu có hành vi vi phạm và bị đánh giá về uy tín được đăng tải trên Hệ thống mạng đấu thầu quốc gia như thế nào?",
    options: [
      "A. Tổ chuyên gia đăng tải trong thời hạn 03 ngày làm việc kể từ ngày nhà thầu có hành vi vi phạm",
      "B. Bên mời thầu đăng tải trong thời hạn 05 ngày làm việc kể từ ngày nhà thầu có hành vi vi phạm",
      "C. Chủ đầu tư đăng tải trong thời hạn 07 ngày làm việc kể từ ngày nhà thầu có hành vi vi phạm",
      "D. Người có thẩm quyền đăng tải trong thời hạn 05 ngày làm việc kể từ ngày nhà thầu có hành vi vi phạm",
    ],
    answer:
      "C. Chủ đầu tư đăng tải trong thời hạn 07 ngày làm việc kể từ ngày nhà thầu có hành vi vi phạm",
  },
  {
    question:
      "Câu 66. Nhà thầu không phải đính kèm thư bảo lãnh (hoặc giấy chứng nhận bảo hiểm bảo lãnh) mà chỉ phải cam kết trong đơn dự thầu khi?",
    options: [
      "A. E-HSMT yêu cầu giá trị bảo đảm dự thầu là 40 triệu đồng",
      "B. E-HSMT yêu cầu giá trị bảo đảm dự thầu là 50 triệu đồng",
      "C. E-HSMT yêu cầu giá trị bảo đảm dự thầu là 60 triệu đồng",
      "D. E-HSMT yêu cầu giá trị bảo đảm dự thầu là 100 triệu đồng",
    ],
    answer: "B. E-HSMT yêu cầu giá trị bảo đảm dự thầu là 50 triệu đồng",
  },
  {
    question:
      "Câu 67. Đối với đấu thầu qua mạng, việc làm rõ E-HSDT giữa Chủ đầu tư và nhà thầu có E-HSDT cần phải làm rõ được thực hiện như thế nào?",
    options: [
      "A. Chủ đầu tư được làm rõ đối với các nội dung về tư cách hợp lệ, năng lực, kinh nghiệm, không được làm rõ đối với yêu cầu về kỹ thuật, tài chính",
      "B. Chủ đầu tư được làm rõ đối với yêu cầu về kỹ thuật, tài chính, không được làm rõ đối với các nội dung về tư cách hợp lệ, năng lực, kinh nghiệm",
      "C. Chủ đầu tư dành cho nhà thầu tối đa 03 ngày để nhà thầu thực hiện việc làm rõ E-HSDT",
      "D. Chủ đầu tư dành cho nhà thầu tối thiểu 03 ngày làm việc để nhà thầu thực hiện việc làm rõ E-HSDT",
    ],
    answer:
      "D. Chủ đầu tư dành cho nhà thầu tối thiểu 03 ngày làm việc để nhà thầu thực hiện việc làm rõ E-",
  },
  {
    question:
      "Câu 68. Bản gốc thư bảo lãnh dự thầu, giấy chứng nhận bảo hiểm bảo lãnh trong đấu thầu qua mạng được nộp như thế nào?",
    options: [
      "A. Gửi qua email đến Tổ trưởng Tổ chuyên gia",
      "B. Gửi cho Chủ đầu tư khi nhà thầu được mời vào đối chiếu tài liệu",
      "C. Gửi bản gốc đến địa chỉ bên mời thầu theo quy định trong E-HSMT",
      "D. Gửi cho Đơn vị tư vấn đấu thầu đánh giá E-HSDT",
    ],
    answer:
      "B. Gửi cho Chủ đầu tư khi nhà thầu được mời vào đối chiếu tài liệu",
  },
  {
    question:
      "Câu 69. Đối với đấu thầu qua mạng, quy định nào về việc mở thầu và công khai biên bản mở thầu trên Hệ thống mạng đấu thầu quốc gia là đúng?",
    options: [
      "A. Hệ thống tự động mở thầu và công khai biên bản mở thầu trong thời hạn không quá 02 giờ kể từ thời điểm đóng thầu.",
      "B. Chủ đầu tư phải mở thầu và công khai biên bản mở thầu trên Hệ thống trong thời hạn không quá 04 giờ kể từ thời điểm đóng thầu.",
      "C. Tổ chuyên gia phải mở thầu và công khai biên bản mở thầu trên Hệ thống trong thời hạn không quá 02 giờ kể từ thời điểm đóng thầu.",
      "D. Chủ đầu tư phải mở thầu và công khai biên bản mở thầu trên Hệ thống trong thời hạn không quá 02 giờ kể từ thời điểm đóng thầu.",
    ],
    answer:
      "D. Chủ đầu tư phải mở thầu và công khai biên bản mở thầu trên Hệ thống trong thời hạn không quá 02 giờ kể từ thời điểm đóng thầu.",
  },
  {
    question:
      "Câu 70. Đối với gói thầu tổ chức lựa chọn nhà thầu qua mạng, trong quá trình đánh giá E-HSDT, Chủ đầu tư nhận thấy nhà thầu có tên trong biên bản mở thầu đang bị khóa tài khoản theo quy định của pháp luật về đấu thầu, E-HSDT của nhà thầu bị đánh giá như thế nào?",
    options: [
      "A. E-HSDT của nhà thầu được tiếp tục xem xét, đánh giá mà không cần phải mở khóa tài khoản trước khi ký hợp đồng",
      "B. E-HSDT của nhà thầu được tiếp tục xem xét, đánh giá nhưng chỉ được đề nghị trúng thầu khi thực hiện mở khóa tài khoản trước khi ký hợp đồng",
      "C. E-HSDT của nhà thầu không được tiếp tục xem xét, đánh giá",
      "D. Nhà thầu bị cấm tham gia hoạt động đấu thầu do có hành vi gian lận",
    ],
    answer: "C. E-HSDT của nhà thầu không được tiếp tục xem xét, đánh giá",
  },
  {
    question:
      "Câu 71. Đối với đấu thầu qua mạng, sau thời điểm đóng thầu, nhận định nào sau đây là đúng?",
    options: [
      "A. Nhà thầu có thể thay đổi nội dung E-HSDT nếu phát hiện sai sót",
      "B. Nhà thầu có thể tự làm rõ E-HSDT trên Hệ thống",
      "C. Nhà thầu không được rút E-HSDT trên Hệ thống",
      "D. Chủ đầu tư không được phép mở thầu khi chỉ có 01 nhà thầu tham dự",
    ],
    answer: "C. Nhà thầu không được rút E-HSDT trên Hệ thống",
  },
  {
    question:
      "Câu 72. File đính kèm nào sau đây của nhà thầu nộp trên Hệ thống mạng đấu thầu quốc gia không được xem xét, đánh giá?",
    options: [
      "A. Các file mở, đọc được bằng các phần mềm thông dụng như: các phần mềm đọc, soạn thảo văn bản MS Office hoặc Open Office; các phần mềm đọc file PDF; các phần mềm thiết kế thông dụng như AutoCad, Photoshop; phần mềm đọc file ảnh tích hợp sẵn trên Hệ điều hành Windows",
      "B. Các file sử dụng phông chữ thuộc bảng mã Unicode",
      "C. Các file nén mở được bằng các phần mềm giải nén thông dụng như phần mềm giải nén ZIP tích hợp sẵn trên hệ điều hành Windows hoặc phần mềm giải nén Rar hoặc 7Zip",
      "D. Các file bị nhiễm virus, bị lỗi, hỏng",
    ],
    answer: "D. Các file bị nhiễm virus, bị lỗi, hỏng",
  },
  {
    question:
      "Câu 73. Đối với đấu thầu qua mạng, nội dung nào sau đây do Hệ thống tự động đánh giá?",
    options: [
      "A. Bảo đảm dự thầu",
      "B. Thoả thuận liên danh đối với nhà thầu liên danh",
      "C. Doanh thu bình quân 3 năm gần nhất của nhà thầu",
      "D. Các đáp án trên đều đúng",
    ],
    answer: "D. Các đáp án trên đều đúng",
  },
  {
    question:
      "Câu 74. Đối với đấu thầu qua mạng, nội dung đánh giá kết quả hoạt động tài chính nào sau đây là đúng?",
    options: [
      "A. Đối với số liệu về kết quả hoạt động tài chính từ 2021 trở đi, Hệ thống đánh giá căn cứ thông tin được trích xuất hoặc thông tin do nhà thầu cập nhật",
      "B. Đối với số liệu về kết quả hoạt động tài chính trước năm 2021, hệ thống đánh giá căn cứ thông tin do nhà thầu kê khai",
      "C. Đối với nhà thầu là hộ kinh doanh, không đánh giá tiêu chí kết quả hoạt động tài chính",
      "D. Tất cả phương án trên đều đúng",
    ],
    answer: "D. Tất cả phương án trên đều đúng",
  },
  {
    question:
      "Câu 75. Đối với đấu thầu rộng rãi qua mạng, một số nội dung do Hệ thống mạng đấu thầu quốc gia đánh giá 'không đạt' thì Tổ chuyên gia không thể sửa đổi kết quả đánh giá từ 'không đạt'. Phương án nào sau đây là đúng?",
    options: [
      "A. Tư cách hợp lệ, nhà thầu không có nhân sự bị tòa án kết án có hành vi vi phạm quy định về đấu thầu gây hậu quả nghiêm trọng, trạng thái bị tạm ngừng, chấm dứt tham gia Hệ thống mạng đấu thầu quốc gia, doanh thu bình quân hằng năm.",
      "B. Tư cách hợp lệ, bảo đảm dự thầu, thực hiện nghĩa vụ kê khai thuế và nộp thuế, kết quả hoạt động tài chính, doanh thu bình quân hằng năm",
      "C. Tư cách hợp lệ, nhà thầu không có nhân sự bị tòa án kết án có hành vi vi phạm quy định về đấu thầu gây hậu quả nghiêm trọng, trạng thái bị tạm ngừng, chấm dứt tham gia Hệ thống mạng đấu thầu quốc gia, thực hiện nghĩa vụ kê khai thuế và nộp thuế, kết quả hoạt động tài chính, doanh thu bình quân hằng năm",
      "D. Tư cách hợp lệ, nhà thầu không có nhân sự bị tòa án kết án có hành vi vi phạm quy định về đấu thầu gây hậu quả nghiêm trọng, lịch sử không hoàn thành hợp đồng do lỗi của nhà thầu, thực hiện nghĩa vụ kê khai thuế và nộp thuế, kết quả hoạt động tài chính, doanh thu bình quân hằng năm",
    ],
    answer:
      "C. Tư cách hợp lệ, nhà thầu không có nhân sự bị tòa án kết án có hành vi vi phạm quy định về đấu thầu gây hậu quả nghiêm trọng, trạng thái bị tạm ngừng, chấm dứt tham gia Hệ thống mạng đấu thầu quốc gia, thực hiện nghĩa vụ kê khai thuế và nộp thuế, kết quả hoạt động tài chính, doanh thu bình quân hằng năm",
  },
  {
    question:
      "Câu 76. Đối với đấu thầu qua mạng, trường hợp Hệ thống gặp sự cố thì trường hợp nào được Hệ thống tự động gia hạn thời điểm đóng thầu?",
    options: [
      "A. Các gói thầu có thời điểm đóng thầu, thời điểm kết thúc chào giá trực tuyến trong thời gian từ khi Hệ thống gặp sự cố cho đến thời điểm sau hoàn thành khắc phục sự cố 02 giờ",
      "B. Các gói thầu có thời điểm đóng thầu, thời điểm kết thúc chào giá trực tuyến, thời điểm đăng tải kết quả lựa chọn nhà thầu trong thời gian từ khi Hệ thống gặp sự cố cho đến thời điểm sau hoàn thành khắc phục sự cố 02 giờ",
      "C. Các gói thầu có thời điểm đóng thầu trong thời gian từ khi Hệ thống gặp sự cố cho đến thời điểm sau hoàn thành khắc phục sự cố 04 giờ",
      "D. Các đáp án trên đều sai",
    ],
    answer:
      "A. Các gói thầu có thời điểm đóng thầu, thời điểm kết thúc chào giá trực tuyến trong thời gian từ khi Hệ thống gặp sự cố cho đến thời điểm sau hoàn thành khắc phục sự cố 02 giờ",
  },
  {
    question: "Câu 77. Đối với đấu thầu qua mạng, khi tham dự thầu, nhà thầu…?",
    options: [
      "A. Chịu trách nhiệm về tính chính xác của các thông tin kê khai trên webform và file tài liệu đính kèm",
      "B. Chỉ nộp một bộ E-HSDT đối với một E-TBMT",
      "C. Chỉ được rút, sửa đổi, nộp lại E-HSDT trước thời điểm đóng thầu",
      "D. Cả 3 đáp án trên đều đúng",
    ],
    answer: "D. Cả 3 đáp án trên đều đúng",
  },
  {
    question: "Câu 78. Khi nào nhà thầu phải nộp lại E-HSDT đã nộp?",
    options: [
      "A. Khi Tổ chuyên gia phát hiện E-HSDT bị lỗi kỹ thuật không mở được",
      "B. Khi Hệ thống mạng đấu thầu quốc gia gặp sự cố phải tự động gia hạn",
      "C. Khi E-HSMT được sửa đổi",
      "D. Các phương án trên đều đúng",
    ],
    answer: "C. Khi E-HSMT được sửa đổi",
  },
  {
    question:
      "Câu 79. Quy trình 02 trong đánh giá E-HSDT được áp dụng đối với gói thầu nào sau đây?",
    options: [
      "A. Gói thầu mua sắm hàng hóa áp dụng phương thức một giai đoạn một túi hồ sơ, sử dụng phương pháp 'giá thấp nhất' và các nhà thầu, E-HSDT đều không có bất kỳ ưu đãi nào",
      "B. Gói thầu dịch vụ phi tư vấn áp dụng phương thức một giai đoạn một túi hồ sơ, sử dụng phương pháp 'giá đánh giá' và các nhà thầu, E-HSDT chào ưu đãi như nhau",
      "C. Gói thầu xây lắp áp dụng phương thức một giai đoạn một túi hồ sơ, sử dụng phương pháp 'giá thấp nhất' và các nhà thầu, E-HSDT đều không có bất kỳ ưu đãi nào",
      "D. Gói thầu máy đặt, máy mượn áp dụng phương thức một giai đoạn một túi hồ sơ, sử dụng phương pháp 'giá thấp nhất' và các nhà thầu, E-HSDT chào ưu đãi như nhau",
    ],
    answer:
      "A. Gói thầu mua sắm hàng hóa áp dụng phương thức một giai đoạn một túi hồ sơ, sử dụng phương pháp 'giá thấp nhất' và các nhà thầu, E-HSDT đều không có bất kỳ ưu đãi nào",
  },
  {
    question:
      "Câu 80. Đối với gói thầu tổ chức đấu thầu rộng rãi qua mạng, trường hợp tại thời điểm đóng thầu mà không có nhà thầu nộp E-HSDT thì chủ đầu tư quyết định theo phương án nào sau đây?",
    options: [
      "A. Huỷ E-TBMT",
      "B. Chuyển sang hình thức đấu thầu rộng rãi không qua mạng",
      "C. Cho phép gia hạn thời điểm đóng thầu tối thiểu 05 ngày đối với gói thầu xây lắp, hỗn hợp có giá gói thầu không quá 20 tỷ đồng, gói thầu mua sắm hàng hoá, dịch vụ phi tư vấn có giá không quá 10 tỷ đồng",
      "D. Phương án A và C đều đúng",
    ],
    answer: "D. Phương án A và C đều đúng",
  },
  {
    question:
      "Câu 81. Chủ thể nào sau đây được gia hạn thời điểm đóng thầu trên Hệ thống mạng đấu thầu quốc gia?",
    options: [
      "A. Người có thẩm quyền",
      "B. Chủ đầu tư",
      "C. Tổ chuyên gia",
      "D. Tư vấn đấu thầu",
    ],
    answer: "B. Chủ đầu tư",
  },
  {
    question:
      "Câu 82. Chọn phương án đúng về thời gian áp dụng mua sắm trực tuyến đối với các hạng mục trong danh mục hàng hóa, dịch vụ mua sắm tập trung?",
    options: [
      "A. Thời gian áp dụng là thời gian thực hiện hợp đồng trong trường hợp không ký thỏa thuận khung nhưng không quá 24 tháng kể từ ngày hợp đồng có hiệu lực hoặc thời gian có hiệu lực của thỏa thuận khung",
      "B. Thời gian áp dụng là 24 tháng kể từ ngày kết quả lựa chọn nhà thầu được đăng tải trên Hệ thống mạng đấu thầu quốc gia trong trường hợp hợp đồng, thỏa thuận khung chưa được công khai",
      "C. Thời gian áp dụng là 24 tháng kể từ ngày kết quả lựa chọn nhà thầu được đăng tải trên Hệ thống mạng đấu thầu quốc gia",
      "D. Phương án A và B đều đúng",
    ],
    answer: "D. Phương án A và B đều đúng",
  },
  {
    question:
      "Câu 83. Đối với gói thầu đấu thầu qua mạng, trường hợp sửa đổi E-HSMT sau khi phát hành, chủ đầu tư phải đăng tải tài liệu nào sau đây trên Hệ thống?",
    options: [
      "A. Quyết định sửa đổi kèm theo những nội dung sửa đổi E-HSMT",
      "B. E-HSMT đã được sửa đổi",
      "C. Báo cáo thẩm định E-HSMT sửa đổi",
      "D. Phương án A và B đều đúng",
    ],
    answer: "D. Phương án A và B đều đúng",
  },
  {
    question:
      "Câu 84. Đối với gói thầu chào giá trực tuyến rút gọn, nhà thầu xác nhận về việc chấp thuận được trao hợp đồng trong thời gian tối đa bao lâu kể từ ngày chủ đầu tư mời nhà thầu xác nhận trên Hệ thống mạng đấu thầu quốc gia?",
    options: [
      "A. 03 ngày",
      "B. 03 ngày làm việc",
      "C. 05 ngày",
      "D. 05 ngày làm việc",
    ],
    answer: "B. 03 ngày làm việc",
  },
  {
    question:
      "Câu 85. Gói thầu chào giá trực tuyến rút gọn, trường hợp nhà thầu từ chối hoặc không xác nhận về việc chấp thuận được trao hợp đồng trên Hệ thống mạng đấu thầu quốc gia thì nội dung nào sau đây không đúng?",
    options: [
      "A. Công khai tên nhà thầu trên Hệ thống mạng đấu thầu quốc gia",
      "B. Khoá tài khoản trong thời hạn 03 tháng kể từ ngày Bộ Tài chính nhận được văn bản đề nghị của chủ đầu tư",
      "C. Khóa chức năng chào giá trực tuyến trong thời hạn 06 tháng kể từ ngày chủ đầu tư công khai tên nhà thầu trên Hệ thống mạng đấu thầu quốc gia",
      "D. Bị đánh giá về uy tín trong việc tham dự thầu",
    ],
    answer:
      "B. Khoá tài khoản trong thời hạn 03 tháng kể từ ngày Bộ Tài chính nhận được văn bản đề nghị của chủ đầu tư",
  },
  {
    question:
      "Câu 86. Mua sắm trực tuyến được áp dụng đối với hàng hoá, dịch vụ của gói thầu thuộc dự toán mua sắm với giá gói thầu có hạn mức tối đa là bao nhiêu?",
    options: [
      "A. 100 triệu đồng",
      "B. 300 triệu đồng",
      "C. 500 triệu đồng",
      "D. 01 tỷ đồng",
    ],
    answer: "C. 500 triệu đồng",
  },
  {
    question:
      "Câu 87. Chào giá trực tuyến theo quy trình thông thường áp dụng đối với gói thầu nào sau đây?",
    options: [
      "A. Dịch vụ phi tư vấn thông dụng, đơn giản",
      "B. Xây lắp",
      "C. Dịch vụ tư vấn",
      "D. Hỗn hợp",
    ],
    answer: "A. Dịch vụ phi tư vấn thông dụng, đơn giản",
  },
  {
    question:
      "Câu 88. Nhà thầu phải thực hiện xác nhận về việc chấp thuận được trao hợp đồng trên Hệ thống mạng đấu thầu quốc gia đối với các hình thức lựa chọn nhà thầu qua mạng nào?",
    options: [
      "A. Đấu thầu rộng rãi, chào hàng cạnh tranh, đấu thầu hạn chế.",
      "B. Chào giá trực tuyến theo quy trình thông thường",
      "C. Chào giá trực tuyến theo quy trình rút gọn",
      "D. Các phương án trên đều đúng",
    ],
    answer: "D. Các phương án trên đều đúng",
  },
  {
    question:
      "Câu 89. Công việc nào sau đây phải thực hiện trên Hệ thống mạng đấu thầu quốc gia?",
    options: [
      "A. Lập E-HSMT",
      "B. Trình phê duyệt E-HSMT, phê duyệt E-HSMT",
      "C. Phê duyệt kết quả lựa chọn nhà thầu",
      "D. Tất cả các phương án trên đều đúng",
    ],
    answer: "D. Tất cả các phương án trên đều đúng",
  },
  {
    question:
      "Câu 90. Chủ đầu tư yêu cầu gia hạn hiệu lực hồ sơ dự thầu, bảo đảm dự thầu trong trường hợp nào sau đây?",
    options: [
      "A. Trước khi hết hạn hiệu lực hồ sơ dự thầu",
      "B. Trường hợp hồ sơ dự thầu của nhà thầu xếp hạng tiếp theo hết hiệu lực thì Chủ đầu tư phải yêu cầu nhà thầu gia hạn hiệu lực của hồ sơ dự thầu, bảo đảm dự thầu trước khi thương thảo hợp đồng",
      "C. Trước khi có kết quả lựa chọn nhà thầu",
      "D. Phương án A và B đều đúng",
    ],
    answer: "D. Phương án A và B đều đúng",
  },
  {
    question:
      "Câu 91. Tài khoản nghiệp vụ trên Hệ thống mạng đấu thầu quốc gia là gì?",
    options: [
      "A.  Tài khoản do người sử dụng đăng ký và được phê duyệt trên Hệ thống mạng đấu thầu quốc gia",
      "B.  Tài khoản do Trung tâm Đấu thầu qua mạng quốc gia cấp phép theo quy định",
      "C.  Tài khoản do Tài khoản tham gia hệ thống tạo ra",
      "D.  Phương án A và B đều đúng",
    ],
    answer: "C.  Tài khoản do Tài khoản tham gia hệ thống tạo ra",
  },
  {
    question:
      "Câu 92. Trong mua sắm tập trung, hợp đồng điện tử có thể được ký kết giữa các đối tượng nào?",
    options: [
      "A. Đơn vị mua sắm tập trung và các nhà thầu trúng thầu (trong trường hợp không ký thỏa thuận khung)",
      "B. Đơn vị có nhu cầu mua sắm với các nhà thầu trúng thầu",
      "C. Phương án A và B đều đúng",
      "D. Phương án A và B đều sai",
    ],
    answer: "C. Phương án A và B đều đúng",
  },
  {
    question:
      "Câu 93. Trong quá trình đánh giá, Tổ chuyên gia phát hiện nhà thầu tham dự thầu trên Hệ thống mạng đấu thầu quốc gia đính kèm tệp tin có thiết lập mật khẩu thì xử lý thế nào?",
    options: [
      "A. Yêu cầu nhà thầu nộp lại tệp tin không có thiết lập mật khẩu trên Hệ thống mạng đấu thầu quốc gia để xem xét, đánh giá",
      "B. Yêu cầu nhà thầu cung cấp mật khẩu để xem xét, đánh giá",
      "C. Tệp tin này không được xem xét, đánh giá",
      "D. Phương án A và B đều đúng",
    ],
    answer: "C. Tệp tin này không được xem xét, đánh giá",
  },
  {
    question:
      "Câu 94. Đối với chào giá trực tuyến rút gọn, kể từ lượt chào giá thứ hai, giá chào của nhà thầu không được thấp hơn giá thấp nhất hiển thị trên Hệ thống mạng đấu thầu quốc gia là bao nhiêu %?",
    options: ["A.  80%", "B.  85%", "C.  90%", "D.  95%"],
    answer: "C.  90%",
  },
  {
    question:
      "Câu 95. Đối với chào giá trực tuyến rút gọn, giá trị bảo đảm dự thầu tối đa là giá trị nào sau đây?",
    options: [
      "A.  5% giá gói thầu",
      "B.  10% giá gói thầu",
      "C.  1-3% giá gói thầu",
      "D.  Không yêu cầu về bảo đảm dự thầu",
    ],
    answer: "D.  Không yêu cầu về bảo đảm dự thầu",
  },
  {
    question:
      "Câu 96. Đối với gói thầu áp dụng chào giá trực tuyến theo quy trình thông thường, trường hợp nhà thầu được mời tham gia chào giá trực tuyến nhưng nhà thầu từ chối tham gia thì xử lý thế nào?",
    options: [
      "A. Đề xuất về tài chính của nhà thầu sẽ bị đánh giá là không đạt",
      "B. Nhà thầu sẽ bị loại và bị khóa tài khoản trên Hệ thống mạng đấu thầu quốc gia trong vòng 06 tháng",
      "C. Hồ sơ dự thầu của nhà thầu sẽ tiếp tục được đánh giá về tài chính căn cứ theo hồ sơ dự thầu đã nộp trước thời điểm đóng thầu",
      "D. Phương án A và B đều đúng",
    ],
    answer:
      "C. Hồ sơ dự thầu của nhà thầu sẽ tiếp tục được đánh giá về tài chính căn cứ theo hồ sơ dự thầu đã nộp trước thời điểm đóng thầu",
  },
  {
    question:
      "Câu 97. Đối với việc giải quyết kiến nghị về các vấn đề trước khi có thông báo kết quả lựa chọn nhà thầu, cá nhân, đơn vị nào sau đây có trách nhiệm giải quyết kiến nghị?",
    options: [
      "A. Chủ đầu tư, người có thẩm quyền",
      "B. Chủ đầu tư, Hội đồng giải quyết kiến nghị",
      "C. Người có thẩm quyền, Hội đồng giải quyết kiến nghị",
      "D. Chủ đầu tư, tổ chuyên gia",
    ],
    answer: "A. Chủ đầu tư, người có thẩm quyền",
  },
  {
    question:
      "Câu 98. Đối với việc giải quyết kiến nghị về kết quả lựa chọn nhà thầu, cá nhân, đơn vị nào sau đây có trách nhiệm giải quyết kiến nghị?",
    options: [
      "A. Chủ đầu tư, người có thẩm quyền",
      "B. Chủ đầu tư, Hội đồng giải quyết kiến nghị",
      "C. Người có thẩm quyền, Hội đồng giải quyết kiến nghị",
      "D. Chủ đầu tư, tổ chuyên gia",
    ],
    answer: "B. Chủ đầu tư, Hội đồng giải quyết kiến nghị",
  },
  {
    question:
      "Câu 99. Trường hợp đang trong quá trình giải quyết kiến nghị mà nhà thầu gửi đơn khiếu nại thì việc giải quyết kiến nghị được xử lý thế nào?",
    options: [
      "A. Tiếp tục giải quyết kiến nghị",
      "B. Chấm dứt ngay việc giải quyết kiến nghị",
      "C. Tạm dừng việc giải quyết kiến nghị đến khi có kết quả giải quyết khiếu nại",
      "D. Tất cả phương án trên đều sai",
    ],
    answer: "B. Chấm dứt ngay việc giải quyết kiến nghị",
  },
  {
    question:
      "Câu 100. Đơn vị sự nghiệp công lập (tự chủ chi thường xuyên và chi đầu tư) thuộc tỉnh B tổ chức đấu thầu cho dự án sử dụng vốn ngân sách nhà nước thì Giám đốc Sở Tài chính Tỉnh B có trách nhiệm thành lập Hội đồng giải quyết kiến nghị cho gói thầu có kiến nghị tại Dự án này hay không?",
    options: [
      "A. Có trách nhiệm thành lập",
      "B. Không có trách nhiệm thành lập",
      "C. Thành lập khi chủ tịch UBND tỉnh yêu cầu",
      "D. Thành lập khi Giám đốc doanh nghiệp A đề nghị",
    ],
    answer: "A. Có trách nhiệm thành lập",
  },
  {
    question:
      "Câu 101. Chi phí giải quyết kiến nghị được nhà thầu nộp cho chủ thể nào sau đây?",
    options: [
      "A. Chủ tịch Hội đồng tư vấn giải quyết kiến nghị",
      "B. Bộ phận thường trực giúp việc cho Chủ tịch Hội đồng giải quyết kiến nghị",
      "C. Chủ đầu tư",
      "D. Người có thẩm quyền",
    ],
    answer:
      "B. Bộ phận thường trực giúp việc cho Chủ tịch Hội đồng giải quyết kiến nghị",
  },
  {
    question:
      "Câu 102. Đối với kiến nghị về kết quả lựa chọn nhà thầu, Hội đồng giải quyết kiến nghị phải có văn bản giải quyết kiến nghị trong thời hạn bao nhiêu ngày kể từ ngày Hội đồng được thành lập?",
    options: ["A. 25 ngày", "B. 30 ngày", "C. 35 ngày", "D. 20 ngày"],
    answer: "B. 30 ngày",
  },
  {
    question:
      "Câu 103. Các trường hợp nào sau đây nhà thầu không được hoàn trả chi phí giải quyết kiến nghị?",
    options: [
      "A. Kiến nghị của nhà thầu được kết luận là đúng",
      "B. Một hoặc các nội dung kiến nghị của nhà thầu được kết luận là không đúng",
      "C. Nhà thầu rút đơn kiến nghị trong quá trình giải quyết kiến nghị",
      "D. Phương án B và C đều đúng",
    ],
    answer: "D. Phương án B và C đều đúng",
  },
  {
    question:
      "Câu 104. Phương án nào sau đây là đúng trong việc giải quyết kiến nghị đối với gói thầu sử dụng vốn sản xuất kinh doanh của doanh nghiệp nhà nước?",
    options: [
      "A. Hội đồng giải quyết kiến nghị do Sở Tài chính thành lập có trách nhiệm giải quyết kiến nghị cho gói thầu",
      "B. Hội đồng giải quyết kiến nghị do Bộ trưởng Bộ Tài chính thành lập có trách nhiệm giải quyết kiến nghị cho gói thầu",
      "C. Người đứng đầu doanh nghiệp nhà nước tự ban hành điều kiện, quy trình về giải quyết kiến nghị trong đơn vị mình",
      "D. Tất cả phương án A, B, C đều sai",
    ],
    answer:
      "A. Hội đồng giải quyết kiến nghị do Sở Tài chính thành lập có trách nhiệm giải quyết kiến nghị cho",
  },
  {
    question:
      "Câu 105. Hội đồng giải quyết kiến nghị có quyền thực hiện việc nào sau đây?",
    options: [
      "A. Hủy thầu",
      "B. Yêu cầu chủ đầu tư tạm dừng, ký kết hợp đồng",
      "C. Yêu cầu nhà thầu, chủ đầu tư và các cơ quan liên quan cung cấp thông tin của gói thầu, dự án và các thông tin liên quan khác để thực hiện nhiệm vụ",
      "D. Không công nhận kết quả lựa chọn nhà thầu",
    ],
    answer:
      "C. Yêu cầu nhà thầu, chủ đầu tư và các cơ quan liên quan cung cấp thông tin của gói thầu, dự án và các thông tin liên quan khác để thực hiện nhiệm vụ",
  },
  {
    question:
      "Câu 106. Trường hợp hồ sơ mời thầu cho phép nhà thầu đề xuất biện pháp thi công khác với biện pháp thi công nêu trong hồ sơ mời thầu thì phần sai khác giữa khối lượng công việc theo biện pháp thi công nêu trong hồ sơ mời thầu và khối lượng công việc theo biện pháp thi công do nhà thầu đề xuất được xem xét thế nào?",
    options: [
      "A. Được tính là sai lệch thừa",
      "B. Không được tính là sai lệch thừa",
      "C. Được tính là sai lệch thiếu",
      "D. Không bị tính là sai lệch thiếu",
    ],
    answer: "D. Không bị tính là sai lệch thiếu",
  },
  {
    question:
      "Câu 107. Trường hợp hồ sơ dự thầu có giá dự thầu sau sửa lỗi, hiệu chỉnh sai lệch, trừ đi giá trị",
    options: [
      "A. 30% giá hợp đồng",
      "B. 35% giá hợp đồng",
      "C. 40% giá hợp đồng",
      "D. 45% giá hợp đồng",
    ],
    answer: "A. 30% giá hợp đồng",
  },
  {
    question:
      "Câu 108. Đối với gói thầu chia phần, chủ đầu tư có thể phê duyệt kết quả lựa chọn nhà thầu cho từng phần hay không",
    options: [
      "A. Không thể",
      "B. Có thể nhưng phải bảo đảm điều kiện giá đề nghị trúng thầu không vượt giá gói thầu",
      "C. Có thể nhưng phải bảo đảm tỷ lệ tiết kiệm tối thiểu 5%",
      "D. Có thể nhưng phải bảo đảm điều kiện giá đề nghị trúng thầu không vượt giá của phần đó trong giá gói thầu",
    ],
    answer:
      "D. Có thể nhưng phải bảo đảm điều kiện giá đề nghị trúng thầu không vượt giá của phần đó trong giá gói thầu",
  },
  {
    question:
      "Câu 109. Đối với gói thầu chia phần, trường hợp một phần của gói thầu không có nhà thầu tham dự thầu thì chủ đầu tư xử lý thế nào?",
    options: [
      "A. Tách phần đó ra thành gói thầu riêng biệt để tổ chức lựa chọn nhà thầu theo quy định",
      "B. Hủy thầu",
      "C. Đàm phán với nhà thầu trúng thầu của phần khác để thực hiện",
      "D. Phương án B và C đều đúng",
    ],
    answer:
      "A. Tách phần đó ra thành gói thầu riêng biệt để tổ chức lựa chọn nhà thầu theo quy định",
  },
  {
    question:
      "Câu 110. Đối với kiến nghị về các vấn đề trước khi có thông báo kết quả lựa chọn nhà thầu, trường hợp nhà thầu gửi đơn kiến nghị đồng thời đến người có thẩm quyền và chủ đầu tư thì chủ thể nào có trách nhiệm giải quyết kiến nghị",
    options: [
      "A. Người có thẩm quyền",
      "B. Chủ đầu tư",
      "C. Bộ phận thường trực",
      "D. Hội đồng giải quyết kiến nghị",
    ],
    answer: "B. Chủ đầu tư",
  },
  {
    question:
      "Câu 111. Đối với kiến nghị về kết quả lựa chọn nhà thầu, trường hợp nhà thầu gửi đơn kiến nghị",
    options: [
      "A. Người có thẩm quyền",
      "B. Chủ đầu tư",
      "C. Bộ phận thường trực",
      "D. Hội đồng giải quyết kiến nghị",
    ],
    answer: "D. Hội đồng giải quyết kiến nghị",
  },
  {
    question:
      "Câu 112. Nội dung nào không thuộc nội dung quản lý nhà nước đối với hoạt động đấu thầu?",
    options: [
      "A. Quản lý hệ thống thông tin và cơ sở dữ liệu về đấu thầu trên phạm vi cả nước.",
      "B. Lập hồ sơ mời quan tâm, hồ sơ mời sơ tuyển, hồ sơ mời thầu, hồ sơ yêu cầu.",
      "C. Đào tạo, bồi dưỡng kiến thức, nghiệp vụ chuyên môn về đấu thầu.",
      "D. Hợp tác quốc tế về đấu thầu",
    ],
    answer:
      "B. Lập hồ sơ mời quan tâm, hồ sơ mời sơ tuyển, hồ sơ mời thầu, hồ sơ yêu cầu.",
  },
  {
    question:
      "Câu 113. Theo quy định pháp luật về đấu thầu, kiểm tra hoạt động đấu thầu được tiến hành theo hình thức nào?",
    options: [
      "A. Kiểm tra trực tiếp",
      "B. Báo cáo bằng văn bản",
      "C. Kết hợp giữa kiểm tra trực tiếp và báo cáo bằng văn bản",
      "D. Kiểm tra định kỳ hoặc đột xuất",
    ],
    answer: "D. Kiểm tra định kỳ hoặc đột xuất",
  },
  {
    question:
      "Câu 114. Thời hiệu áp dụng biện pháp cấm tham gia hoạt động đấu thầu là bao lâu?",
    options: [
      "A. 10 năm tính từ ngày xảy ra hành vi vi phạm",
      "B. 10 năm tính từ ngày phát hiện ra hành vi vi phạm",
      "C. 05 năm tính từ ngày phát hiện ra hành vi vi phạm",
      "D. 05 năm tính từ ngày xảy ra hành vi vi phạm",
    ],
    answer: "A. 10 năm tính từ ngày xảy ra hành vi vi phạm",
  },
  {
    question:
      "Câu 115. Chủ thể nào không có quyền cấm tham gia hoạt động đấu thầu?",
    options: [
      "A. Người có thẩm quyền",
      "B. Chủ đầu tư",
      "C. Bộ trưởng, Thủ trưởng cơ quan ngang Bộ, cơ quan thuộc Chính phủ, cơ quan khác ở Trung ương",
      "D. Chủ tịch Ủy ban nhân dân cấp tỉnh",
    ],
    answer: "B. Chủ đầu tư",
  },
  {
    question:
      "Câu 116. Người có thẩm quyền ban hành quyết định cấm tham gia hoạt động đấu thầu với thời gian cấm bao lâu đối với trường hợp tổ chức, cá nhân có từ 02 hành vi vi phạm trở lên thuộc cùng phạm vi quản lý của người có thẩm quyền và các hành vi này chưa bị cấm tham gia hoạt động đấu thầu?",
    options: [
      "A. Bằng tổng thời gian cấm của các hành vi vi phạm nhưng tối thiểu trên 05 năm",
      "B. Bằng tổng thời gian cấm của các hành vi vi phạm nhưng tối đa không quá 03 năm",
      "C. Bằng tổng thời gian cấm của các hành vi vi phạm nhưng tối đa không quá 05 năm",
      "D. Bằng thời gian cấm của hành vi vi phạm có thời gian bị cấm cao nhất",
    ],
    answer:
      "C. Bằng tổng thời gian cấm của các hành vi vi phạm nhưng tối đa không quá 05 năm",
  },
  {
    question:
      "Câu 117. Hành vi gian lận trong hoạt động đấu thầu sẽ bị cấm tham gia hoạt động đấu thầu trong thời gian bao lâu?",
    options: [
      "A. Từ 06 tháng đến 01 năm",
      "B. 02 năm",
      "C. Từ 01 năm đến 02 năm",
      "D. Từ 03 năm đến 05 năm",
    ],
    answer: "D. Từ 03 năm đến 05 năm",
  },
  {
    question:
      "Câu 118. Hành vi cản trở trong hoạt động đấu thầu sẽ bị cấm tham gia hoạt động đấu thầu trong thời gian bao lâu?",
    options: [
      "A. 06 tháng",
      "B. Từ 06 tháng đến dưới 1 năm",
      "C. Từ 01 năm đến 03 năm",
      "D. 05 năm",
    ],
    answer: "C. Từ 01 năm đến 03 năm",
  },
  {
    question:
      "Câu 119. Thành viên A trong nhà thầu liên danh A-B thực hiện hành vi 'làm giả hoặc làm sai lệch thông tin, hồ sơ, tài liệu trong đấu thầu' thì việc cấm tham gia hoạt động đấu thầu được xử lý như thế nào?",
    options: [
      "A. Cấm tham gia hoạt động đấu thầu từ 03 năm đến 05 năm đối với thành viên A",
      "B. Cấm tham gia hoạt động đấu thầu từ 01 năm đến dưới 03 năm đối với thành viên A",
      "C. Cấm tham gia hoạt động đấu thầu từ 03 năm đến 05 năm đối với tất cả thành viên trong nhà thầu liên danh A-B",
      "D. Cấm tham gia hoạt động đấu thầu từ 01 năm đến 03 năm đối với tất cả thành viên trong nhà thầu liên danh A-B",
    ],
    answer:
      "A. Cấm tham gia hoạt động đấu thầu từ 03 năm đến 05 năm đối với thành viên A",
  },
  {
    question: "Câu 120. Thẩm quyền xử lý tình huống phức tạp trong đấu thầu?",
    options: [
      "A. Chủ đầu tư quyết định xử lý tình huống sau khi có ý kiến của người có thẩm quyền",
      "B. Người có thẩm quyền quyết định xử lý tình huống sau khi có ý kiến của Tổ chuyên gia",
      "C. Người có thẩm quyền quyết định xử lý tình huống sau khi có ý kiến của chủ đầu tư",
      "D. Người có thẩm quyền quyết định xử lý tình huống sau khi có ý kiến của chủ đầu tư và Tổ chuyên gia",
    ],
    answer:
      "A. Chủ đầu tư quyết định xử lý tình huống sau khi có ý kiến của người có thẩm quyền",
  },
  {
    question:
      "Câu 121. Trường hợp một hoặc một số thành viên liên danh vi phạm hợp đồng, không còn năng lực để tiếp tục thực hiện hợp đồng, làm ảnh hưởng nghiêm trọng đến tiến độ, chất lượng, hiệu quả của gói thầu thì việc đánh giá uy tín của nhà thầu trong việc thực hiện hợp đồng được xử lý như nào?",
    options: [
      "A. Nhà thầu liên danh vi phạm hợp đồng bị coi là không hoàn thành hợp đồng và bị chủ đầu tư đăng tải thông tin nhà thầu liên danh vi phạm hợp đồng trên Hệ thống mạng đấu thầu quốc gia",
      "B. Chỉ một hoặc một số thành viên liên danh vi phạm hợp đồng bị coi là không hoàn thành hợp đồng và bị chủ đầu tư đăng tải thông tin thành viên liên danh vi phạm hợp đồng trên Hệ thống mạng đấu thầu quốc gia",
      "C. Chỉ một hoặc một số thành viên liên danh vi phạm hợp đồng bị coi là không hoàn thành hợp đồng và bị bên mời thầu đăng tải thông tin thành viên liên danh vi phạm hợp đồng trên Hệ thống mạng đấu thầu quốc gia",
      "D. Nhà thầu liên danh vi phạm hợp đồng bị coi là không hoàn thành hợp đồng và bị bên mời thầu đăng tải thông tin nhà thầu liên danh vi phạm hợp đồng trên Hệ thống mạng đấu thầu quốc gia",
    ],
    answer:
      "B. Chỉ một hoặc một số thành viên liên danh vi phạm hợp đồng bị coi là không hoàn thành hợp đồng và bị chủ đầu tư đăng tải thông tin thành viên liên danh vi phạm hợp đồng trên Hệ thống mạng đấu thầu quốc gia",
  },
  {
    question:
      "Câu 122. Trường hợp phải chấm dứt hợp đồng với nhà thầu vi phạm hợp đồng để thay thế nhà thầu mới thì phần công việc chưa thực hiện được áp dụng hình thức chỉ định thầu cho nhà thầu khác với giá trị được tính như nào?",
    options: [
      "A. Bằng giá trị ghi trong hợp đồng trừ đi giá trị của phần công việc đã thực hiện, được nghiệm thu trước đó",
      "B. Bằng giá trị ghi trong hợp đồng được cập nhật giá tại thời điểm áp dụng hình thức chỉ định thầu trừ đi giá trị của phần công việc đã thực hiện, được nghiệm thu trước đó",
      "C. Bằng giá trị của phần công việc còn lại được cập nhật giá tại thời điểm áp dụng hình thức chỉ định thầu",
      "D. Bằng giá trị ghi trong hợp đồng trừ đi giá trị của phần công việc đã thực hiện trước đó theo dự toán được duyệt",
    ],
    answer:
      "A. Bằng giá trị ghi trong hợp đồng trừ đi giá trị của phần công việc đã thực hiện, được nghiệm thu trước đó",
  },
  {
    question:
      "Câu 123. Đối với nhà thầu liên danh, trường hợp trong quá trình thực hiện hợp đồng cần đẩy nhanh tiến độ thực hiện so với hợp đồng đã ký (cần sửa đổi hợp đồng) thì cần thực hiện như thế nào?",
    options: [
      "A. Các thành viên liên danh thỏa thuận, điều chỉnh về phạm vi công việc, tiến độ được rút ngắn và không phải thông báo cho chủ đầu tư",
      "B. Các thành viên liên danh thỏa thuận, điều chỉnh về phạm vi công việc, tiến độ được rút ngắn và thông báo cho chủ đầu tư",
      "C. Phải được người có thẩm quyền cho phép chủ đầu tư và nhà thầu thỏa thuận, điều chỉnh phạm vi công việc giữa các thành viên liên danh phù hợp với tiến độ hoặc tiến độ được rút ngắn",
      "D. Chủ đầu tư và nhà thầu được thỏa thuận điều chỉnh phạm vi công việc giữa các thành viên liên danh phù hợp với tiến độ hoặc tiến độ được rút ngắn",
    ],
    answer:
      "D. Chủ đầu tư và nhà thầu được thỏa thuận điều chỉnh phạm vi công việc giữa các thành viên liên danh phù hợp với tiến độ hoặc tiến độ được rút ngắn",
  },
  {
    question:
      "Câu 124. Trường hợp nhà thầu có nhân sự (ký kết hợp đồng lao động với nhà thầu tại thời điểm nhân sự thực hiện hành vi vi phạm) bị cơ quan điều tra kết luận có hành vi vi phạm quy định về đấu thầu gây hậu quả nghiêm trọng theo quy định pháp luật về hình sự nhằm mục đích cho nhà thầu trúng thầu nhưng nhân sự của nhà thầu chưa bị Tòa án kết án hoặc nhà thầu chưa bị người có thẩm quyền ra quyết định cấm tham gia hoạt động đấu thầu thì tại thời điểm này nhà thầu có được tham dự thầu hay không?",
    options: [
      "A. Nhà thầu không được tham dự thầu",
      "B. Hồ sơ dự thầu, hồ sơ đề xuất của nhà thầu sẽ được mở nhưng không được xem xét, đánh giá",
      "C. Hồ sơ dự thầu, hồ sơ đề xuất của nhà thầu không được mở thầu và trả lại theo nguyên trạng",
      "D. Nhà thầu vẫn được tiếp tục tham dự thầu",
    ],
    answer: "D. Nhà thầu vẫn được tiếp tục tham dự thầu",
  },
  {
    question:
      "Câu 125. Trường hợp nào là một trong những điều kiện để chủ đầu tư chấp thuận đề xuất của nhà thầu trong quá trình thực hiện hợp đồng về việc thay đổi các hàng hóa có phiên bản sản xuất, năm sản xuất mới hơn so với hàng hóa ghi trong hợp đồng?",
    options: [
      "A. Hàng hóa thay thế có tính năng kỹ thuật, cấu hình, thông số và các yêu cầu kỹ thuật khác tương đương hoặc tốt hơn hàng hóa ghi trong hợp đồng nhưng bắt buộc phải cùng hãng sản xuất và xuất xứ",
      "B. Hàng hóa thay thế có tính năng kỹ thuật, cấu hình, thông số và các yêu cầu kỹ thuật khác tương đương hoặc tốt hơn hàng hóa ghi trong hợp đồng, phải cùng hãng sản xuất nhưng không bắt buộc cùng xuất xứ",
      "C. Hàng hóa thay thế có tính năng kỹ thuật, cấu hình, thông số và các yêu cầu kỹ thuật khác tương đương hoặc tốt hơn hàng hóa ghi trong hợp đồng, phải cùng xuất xứ nhưng không bắt buộc cùng hãng sản xuất",
      "D. Hàng hóa thay thế có tính năng kỹ thuật, cấu hình, thông số và các yêu cầu kỹ thuật khác tương đương hoặc tốt hơn hàng hóa ghi trong hợp đồng nhưng không bắt buộc cùng hãng sản xuất và cùng xuất xứ",
    ],
    answer:
      "A. Hàng hóa thay thế có tính năng kỹ thuật, cấu hình, thông số và các yêu cầu kỹ thuật khác tương đương hoặc tốt hơn hàng hóa ghi trong hợp đồng nhưng bắt buộc phải cùng hãng sản xuất và xuất xứ",
  },
  {
    question:
      "Câu 126. Trường hợp gói thầu có tính chất đặc thù và áp dụng hình thức chỉ định thầu hoặc lựa chọn nhà thầu trong trường hợp đặc biệt, nhà thầu nước ngoài có yêu cầu ràng buộc chỉ ký hợp đồng khi không phải đăng ký trên Hệ thống mạng đấu thầu quốc gia thì chủ đầu tư xử lý như thế nào?",
    options: [
      "A. Không cần yêu cầu nhà thầu nước ngoài đăng ký khi đăng tải kết quả lựa chọn nhà thầu",
      "B. Yêu cầu nhà thầu nước ngoài đăng ký khi đăng tải kết quả lựa chọn nhà thầu",
      "C. Nhà thầu không được chấp nhận và bị loại",
      "D. Hủy thầu",
    ],
    answer:
      "B. Yêu cầu nhà thầu nước ngoài đăng ký khi đăng tải kết quả lựa chọn nhà thầu",
  },
  {
    question:
      "Câu 127. Đối với trường hợp hủy thầu thì phải thực hiện giải pháp nào sau đây?",
    options: [
      "A. Phải điều chỉnh thời gian bắt đầu tổ chức lựa chọn nhà thầu trong kế hoạch lựa chọn nhà thầu",
      "B. Phải điều chỉnh thời gian thực hiện gói thầu trong kế hoạch lựa chọn nhà thầu",
      "C. Không phải điều chỉnh thời gian bắt đầu tổ chức lựa chọn nhà thầu trong kế hoạch lựa chọn nhà",
      "D. Tất cả các đáp án trên đều không đúng",
    ],
    answer:
      "C. Không phải điều chỉnh thời gian bắt đầu tổ chức lựa chọn nhà thầu trong kế hoạch lựa chọn nhà",
  },
  {
    question: "Câu 128. Hủy thầu được thực hiện trong thời gian nào?",
    options: [
      "A. Từ ngày có thời điểm đóng thầu đến khi có kết quả lựa chọn nhà thầu",
      "B. Từ ngày phát hành hồ sơ mời sơ tuyển, hồ sơ mời quan tâm, hồ sơ mời thầu, hồ sơ yêu cầu đến trước khi ký kết hợp đồng, thỏa thuận khung đối với mua sắm tập trung",
      "C. Từ ngày có thời điểm đóng thầu đến khi ký kết hợp đồng, thỏa thuận khung đối với mua sắm tập trung",
      "D. Từ ngày phát hành hồ sơ mời sơ tuyển, hồ sơ mời quan tâm, hồ sơ mời thầu, hồ sơ yêu cầu kể cả sau khi đã ký hợp đồng",
    ],
    answer:
      "D. Từ ngày phát hành hồ sơ mời sơ tuyển, hồ sơ mời quan tâm, hồ sơ mời thầu, hồ sơ yêu cầu kể cả sau khi đã ký hợp đồng",
  },
  {
    question:
      "Câu 129. Đối với gói thầu tổ chức lựa chọn nhà thầu qua mạng, trường hợp trong quá trình đánh giá E-HSDT mà chưa có kết quả lựa chọn nhà thầu, nhà thầu có tên trong biên bản mở thầu bị khóa tài khoản theo quy định của pháp luật về đấu thầu thì chủ đầu tư xử lý như thế nào?",
    options: [
      "A. Yêu cầu nhà thầu thực hiện các thủ tục để mở khóa tài khoản làm cơ sở xem xét, đánh giá E-HSDT của nhà thầu",
      "B. Tiếp tục xem xét, đánh giá E-HSDT của nhà thầu",
      "C. Không tiếp tục xem xét, đánh giá E-HSDT của nhà thầu",
      "D. Tiếp tục xem xét, đánh giá E-HSDT của nhà thầu và yêu cầu nhà thầu thực hiện các thủ tục để mở khóa tài khoản trước khi phê duyệt kết quả lựa chọn nhà thầu",
    ],
    answer:
      "D. Tiếp tục xem xét, đánh giá E-HSDT của nhà thầu và yêu cầu nhà thầu thực hiện các thủ tục để mở khóa tài khoản trước khi phê duyệt kết quả lựa chọn nhà thầu",
  },
  {
    question:
      "Câu 130. Đối với gói thầu xây lắp, dịch vụ phi tư vấn, dịch vụ tư vấn áp dụng đấu thầu trước quy định tại Điều 42 của Luật Đấu thầu, trường hợp dự án được phê duyệt có các nội dung dẫn đến tăng giá gói thầu (hoặc tăng dự toán nếu dự toán được phê duyệt sau khi phê duyệt kế hoạch lựa chọn nhà thầu) từ 30% trở lên hoặc thay đổi tiêu chuẩn đánh giá quan trọng về kỹ thuật hoặc thay đổi cấp công trình quy định trong hồ sơ mời thầu đã phát hành thì chủ đầu tư xử lý như thế nào?",
    options: [
      "A. Tiếp tục đánh giá hồ sơ dự thầu trong trường hợp đã mở thầu",
      "B. Được sửa đổi và phát hành bổ sung hồ sơ mời thầu trong trường hợp chưa mở thầu",
      "C. Được sửa đổi, bổ sung khối lượng công việc, hoàn thiện để ký kết hợp đồng với nhà thầu",
      "D. Hủy thầu",
    ],
    answer: "D. Hủy thầu",
  },
  {
    question:
      "Câu 131. Trường hợp nhà thầu trúng thầu không tiến hành hoàn thiện, ký kết hợp đồng hoặc tại thời điểm ký kết hợp đồng, nhà thầu trúng thầu không đáp ứng yêu cầu về năng lực kỹ thuật, tài chính quy định tại khoản 2 Điều 66 của Luật Đấu thầu thì chủ đầu tư xử lý như thế nào trong trường hợp này?",
    options: [
      "A. Hủy quyết định phê duyệt kết quả lựa chọn nhà thầu trúng thầu",
      "B. Hủy thầu",
      "C. Không công nhận kết quả lựa chọn nhà thầu",
      "D. Đình chỉ cuộc thầu",
    ],
    answer: "B. Hủy thầu",
  },
  {
    question:
      "Câu 132. Trường hợp nào dưới đây, chủ đầu tư và nhà thầu liên danh được thỏa thuận điều chỉnh phạm vi công việc giữa các thành viên liên danh?",
    options: [
      "A. Khi một thành viên liên danh không muốn tiếp tục thực hiện phần việc đã cam kết",
      "B. Khi chủ đầu tư thấy một thành viên trong liên danh thực hiện tốt nên muốn điều chuyển toàn bộ phần việc cho thành viên liên danh đó",
      "C. Khi cần đẩy nhanh tiến độ thực hiện hợp đồng hoặc do điều kiện khách quan không phải lỗi của nhà thầu làm ảnh hưởng tiến độ",
      "D. Khi một thành viên liên danh đề nghị chuyển nhượng phần việc để tiết kiệm chi phí",
    ],
    answer:
      "C. Khi cần đẩy nhanh tiến độ thực hiện hợp đồng hoặc do điều kiện khách quan không phải lỗi của nhà thầu làm ảnh hưởng tiến độ",
  },
  {
    question: "Câu 133. Đình chỉ cuộc thầu được thực hiện trong thời gian nào?",
    options: [
      "A. Từ ngày phát hành hồ sơ mời sơ tuyển, hồ sơ mời quan tâm, hồ sơ mời thầu, hồ sơ yêu cầu đến trước khi ký kết hợp đồng, thỏa thuận khung đối với mua sắm tập trung",
      "B. Trong quá trình tổ chức lựa chọn nhà thầu cho đến trước khi phê duyệt kết quả lựa chọn nhà thầu",
      "C. Sau khi phê duyệt kết quả lựa chọn nhà thầu đến khi ký kết hợp đồng, thỏa thuận khung đối với mua sắm tập trung",
      "D. Trong quá trình thực hiện hợp đồng",
    ],
    answer:
      "B. Trong quá trình tổ chức lựa chọn nhà thầu cho đến trước khi phê duyệt kết quả lựa chọn nhà thầu",
  },
  {
    question:
      "Câu 134. Biện pháp nào sau đây được thực hiện trong quá trình thực hiện hợp đồng?",
    options: [
      "A. Hủy thầu",
      "B. Đình chỉ cuộc thầu",
      "C. Không công nhận kết quả lựa chọn nhà thầu",
      "D. Phương án A và B đều đúng",
    ],
    answer: "A. Hủy thầu",
  },
  {
    question:
      "Câu 135. Thẩm quyền phê duyệt kế hoạch tổng thể lựa chọn nhà thầu thuộc chủ thể nào?",
    options: [
      "A. Người có thẩm quyền",
      "B. Chủ đầu tư (trường hợp xác định được chủ đầu tư)",
      "C. Người đứng đầu cơ quan được giao chuẩn bị dự án",
      "D. Bên mời thầu",
    ],
    answer: "A. Người có thẩm quyền",
  },
  {
    question:
      "Câu 136. Trường hợp thuê đơn vị tư vấn lập hồ sơ mời quan tâm, hồ sơ mời sơ tuyển, hồ sơ mời thầu, hồ sơ yêu cầu; đánh giá hồ sơ quan tâm, hồ sơ dự sơ tuyển, hồ sơ dự thầu, hồ sơ đề xuất, tổ chuyên gia được thành lập bởi?",

    options: [
      "A. Người có thẩm quyền",
      "B. Chủ đầu tư",
      "C. Bên mời thầu",
      "D. Đơn vị tư vấn được chủ đầu tư lựa chọn",
    ],
    answer: "B. Chủ đầu tư",
  },
  {
    question:
      "Câu 137. Nhiệm vụ nào sau đây không thuộc trách nhiệm của người có thẩm quyền?",
    options: [
      "A. Phê duyệt kế hoạch lựa chọn nhà thầu",
      "B. Giải quyết kiến nghị và xử lý các vi phạm pháp luật về đấu thầu",
      "C. Quyết định việc hủy thầu khi thay đổi mục tiêu đầu tư trong quyết định đầu tư",
      "D. Quyết định việc hủy thầu, đình chỉ cuộc đấu thầu, không công nhận kết quả lựa chọn nhà thầu khi phát hiện có hành vi vi phạm pháp luật về đấu thầu",
    ],
    answer:
      "C. Quyết định việc hủy thầu khi thay đổi mục tiêu đầu tư trong quyết định đầu tư",
  },
  {
    question:
      "Câu 138. Phát hành hồ sơ mời quan tâm, hồ sơ mời sơ tuyển, hồ sơ mời thầu được thực hiện như thế nào?",
    options: [
      "A. Hồ sơ mời quan tâm, hồ sơ mời sơ tuyển, hồ sơ mời thầu được phát hành sau khi thông báo mời quan tâm, thông báo mời sơ tuyển, thông báo mời thầu được đăng tải thành công trên Hệ thống mạng đấu thầu quốc gia",
      "B. Hồ sơ mời quan tâm, hồ sơ mời sơ tuyển, hồ sơ mời thầu được phát hành trước khi với thông báo mời quan tâm, thông báo mời sơ tuyển, thông báo mời thầu",
      "C. Hồ sơ mời quan tâm, hồ sơ mời sơ tuyển, hồ sơ mời thầu được phát hành tại thời điểm 03 ngày sau khi thông báo mời quan tâm, thông báo mời sơ tuyển, thông báo mời thầu được đăng tải thành công trên Hệ thống mạng đấu thầu quốc gia",
      "D. Hồ sơ mời quan tâm, hồ sơ mời sơ tuyển, hồ sơ mời thầu được phát hành đồng thời với thông báo mời quan tâm, thông báo mời sơ tuyển, thông báo mời thầu",
    ],
    answer:
      "D. Hồ sơ mời quan tâm, hồ sơ mời sơ tuyển, hồ sơ mời thầu được phát hành đồng thời với thông báo mời quan tâm, thông báo mời sơ tuyển, thông báo mời thầu",
  },
  {
    question:
      "Câu 139. Danh mục hàng hóa, dịch vụ áp dụng mua sắm tập trung do Bộ trưởng Bộ Y tế ban hành:",
    options: [
      "A. Danh mục mua sắm tập trung cấp quốc gia đối với ô tô trong trường hợp cần thiết",
      "B. Danh mục mua sắm tập trung cấp quốc gia đối với thuốc; danh mục mua sắm tập trung cấp quốc gia đối với thiết bị công nghệ thông tin trong trường hợp cần thiết",
      "C. Danh mục mua sắm tập trung cấp quốc gia đối với thuốc; danh mục mua sắm tập trung cấp quốc gia đối với dịch vụ đơn giản trong trường hợp cần thiết",
      "D. Danh mục mua sắm tập trung cấp quốc gia đối với thuốc; danh mục mua sắm tập trung cấp quốc gia đối với thiết bị y tế, vật tư xét nghiệm trong trường hợp cần thiết",
    ],
    answer:
      "D. Danh mục mua sắm tập trung cấp quốc gia đối với thuốc; danh mục mua sắm tập trung cấp quốc gia đối với thiết bị y tế, vật tư xét nghiệm trong trường hợp cần thiết",
  },
  {
    question:
      "Câu 140. Hình thức lựa chọn nhà thầu khi áp dụng mua sắm tập trung bảo hiểm tài sản cho các cơ quan thuộc tỉnh Y",

    options: [
      "A. Đấu thầu rộng rãi.",
      "B. Đấu thầu hạn chế.",
      "C. Đàm phán giá.",
      "D. Đấu thầu rộng rãi và đàm phán giá.",
    ],
    answer: "D. Đấu thầu rộng rãi và đàm phán giá.",
  },
  {
    question: "Câu 141 Đơn vị mua sắm tập trung:",
    options: [
      "A. Thực hiện việc lựa chọn nhà thầu trên cơ sở nhiệm vụ được giao",
      "B. Thực hiện việc lựa chọn nhà thầu trên cơ sở hợp đồng ký với các đơn vị có nhu cầu",
      "C. Thực hiện việc lựa chọn nhà thầu trên cơ sở nhiệm vụ được giao hoặc hợp đồng ký với các đơn vị có nhu cầu",
      "D. Không được thực hiện việc lựa chọn nhà thầu",
    ],
    answer:
      "C. Thực hiện việc lựa chọn nhà thầu trên cơ sở nhiệm vụ được giao hoặc hợp đồng ký với các đơn vị có nhu cầu",
  },
  {
    question: "Câu 142. Thời hạn của thỏa thuận khung:",
    options: [
      "A. Thời hạn áp dụng thỏa thuận khung được quy định là 40 tháng",
      "B. Thời hạn áp dụng thỏa thuận khung được quy định trong kế hoạch lựa chọn nhà thầu nhưng không quá 36 tháng",
      "C. Thời hạn áp dụng thỏa thuận khung do người có thẩm quyền quyết định trong kế hoạch lựa chọn nhà thầu",
      "D. Phương án B và C đều đúng",
    ],
    answer:
      "B. Thời hạn áp dụng thỏa thuận khung được quy định trong kế hoạch lựa chọn nhà thầu nhưng không quá 36 tháng",
  },
  {
    question:
      "Câu 143. Tại bước hoàn thiện, ký kết và thực hiện hợp đồng với nhà thầu đối với gói thầu mua sắm tập trung:",
    options: [
      "A. Nhà thầu đã ký kết thỏa thuận khung phải thực hiện biện pháp bảo đảm thực hiện hợp đồng trước hoặc cùng thời điểm hợp đồng có hiệu lực cho đơn vị mua sắm tập trung",
      "B. Nhà thầu đã ký kết thỏa thuận khung phải thực hiện biện pháp bảo đảm thực hiện hợp đồng trước hoặc cùng thời điểm hợp đồng có hiệu lực cho đơn vị có nhu cầu mua sắm",
      "C. Nhà thầu đã ký kết thỏa thuận khung không phải thực hiện biện pháp bảo đảm thực hiện hợp đồng trước thời điểm hợp đồng có hiệu lực cho đơn vị có nhu cầu mua sắm",
      "D. Nhà thầu đã ký kết thỏa thuận khung phải thực hiện biện pháp bảo đảm thực hiện hợp đồng sau thời điểm hợp đồng có hiệu lực cho đơn vị mua sắm tập trung",
    ],
    answer:
      "B. Nhà thầu đã ký kết thỏa thuận khung phải thực hiện biện pháp bảo đảm thực hiện hợp đồng trước hoặc cùng thời điểm hợp đồng có hiệu lực cho đơn vị có nhu cầu mua sắm",
  },
  {
    question:
      "Câu 144. Đối với các gói thầu mua sắm tập trung, trách nhiệm cung cấp thông tin về kết quả thực hiện hợp đồng của nhà thầu do ai thực hiện?",

    options: [
      "A. Đơn vị có nhu cầu mua sắm",
      "B. Bên mời thầu",
      "C. Đơn vị tư vấn được thuê làm bên mời thầu",
      "D. Không phải đăng tải thông tin",
    ],
    answer: "A. Đơn vị có nhu cầu mua sắm",
  },
  {
    question:
      "Câu 145. Áp dụng hình thức lựa chọn nhà thầu nào khi mua sắm tập trung đối với gói thầu điều hòa không khí thông dụng, sẵn có trên thị trường, có giá gói thầu là 03 tỷ đồng cho các cơ quan thuộc tỉnh X?",

    options: [
      "A. Đấu thầu rộng rãi hoặc mua sắm trực tiếp",
      "B. Đấu thầu rộng rãi hoặc chỉ định thầu theo hạn mức",
      "C. Đấu thầu rộng rãi hoặc chào hàng cạnh tranh",
      "D. Đấu thầu rộng rãi hoặc chỉ định thầu hoặc đám phán giá",
    ],
    answer: "C. Đấu thầu rộng rãi hoặc chào hàng cạnh tranh",
  },
  {
    question: "Câu 146. Trách nhiệm trong mua sắm tập trung",
    options: [
      "A. Đơn vị mua sắm tập trung thực hiện trách nhiệm của người có thẩm quyền theo quy định của",
      "B. Đơn vị mua sắm tập trung thực hiện trách nhiệm của chủ đầu tư quy định của Luật Đấu thầu",
      "C. Đơn vị mua sắm tập trung thực hiện trách nhiệm của bên mời thầu quy định của Luật Đấu thầu",
      "D. Đơn vị mua sắm tập trung thực hiện trách nhiệm của tổ chuyên gia theo quy định của Luật Đấu thầu",
    ],
    answer:
      "B. Đơn vị mua sắm tập trung thực hiện trách nhiệm của chủ đầu tư quy định của Luật Đấu thầu",
  },
  {
    question:
      "Câu 147. Nhà thầu đã ký thỏa thuận khung và được đơn vị có nhu cầu mua sắm yêu cầu ký hợp đồng nhưng không ký hợp đồng, không thực hiện biện pháp bảo đảm thực hiện hợp đồng sẽ bị xử lý như thế nào?",
    options: [
      "A. Nhà thầu sẽ bị khóa tài khoản trên Hệ thống mạng đấu thầu quốc gia trong thời hạn 06 tháng kể từ ngày đơn vị có nhu cầu mua sắm công khai tên nhà thầu trên Hệ thống mạng đấu thầu quốc gia",
      "B. Nhà thầu sẽ bị khóa tài khoản trên Hệ thống mạng đấu thầu quốc gia trong thời hạn 06 tháng kể từ ngày đơn vị mua sắm tập trung công khai tên nhà thầu trên Hệ thống mạng đấu thầu quốc gia, trừ trường hợp bất khả kháng",
      "C. Nhà thầu sẽ bị khóa tài khoản trên Hệ thống mạng đấu thầu quốc gia trong thời hạn trong thời hạn 03 tháng kể từ ngày Bộ Tài chính nhận được văn bản đề nghị của đơn vị có nhu cầu mua sắm, trừ trường hợp bất khả kháng",
      "D. Nhà thầu sẽ bị khóa tài khoản trên Hệ thống mạng đấu thầu quốc gia trong thời hạn trong thời hạn 06 tháng kể từ ngày Bộ Tài chính nhận được văn bản đề nghị của đơn vị có nhu cầu mua sắm, trừ trường hợp bất khả kháng",
    ],
    answer:
      "B. Nhà thầu sẽ bị khóa tài khoản trên Hệ thống mạng đấu thầu quốc gia trong thời hạn 06 tháng kể từ ngày đơn vị mua sắm tập trung công khai tên nhà thầu trên Hệ thống mạng đấu thầu quốc gia, trừ trường hợp bất khả kháng",
  },
  {
    question:
      "Câu 148. Đối với gói thầu mua sắm tập trung áp dụng lựa chọn nhà thầu căn cứ theo khả năng cung cấp và áp dụng phương pháp giá thấp nhất, việc lựa chọn danh sách nhà thầu trúng thầu được thực hiện như thế nào?",
    options: [
      "A. Phải đảm bảo tổng số lượng hàng hóa mà các nhà thầu trúng thầu chào thầu tối thiểu bằng số lượng hàng hóa nêu trong hồ sơ mời thầu, đồng thời bảo đảm tổng giá đề nghị trúng thầu của gói thầu tốt nhất",
      "B. Phải đảm bảo tổng số lượng hàng hóa mà các nhà thầu trúng thầu chào thầu bằng số lượng hàng hóa nêu trong hồ sơ mời thầu, đồng thời bảo đảm tổng giá đề nghị trúng thầu của gói thầu cao nhất",
      "C. Phải đảm bảo tổng số lượng hàng hóa mà các nhà thầu trúng thầu chào thầu tối thiểu bằng số lượng hàng hóa nêu trong hồ sơ mời thầu, đồng thời bảo đảm tổng giá đề nghị trúng thầu của gói thầu thấp nhất",
      "D. Phải đảm bảo tổng số lượng hàng hóa mà các nhà thầu trúng thầu chào thầu bằng số lượng hàng hóa nêu trong hồ sơ mời thầu, đồng thời bảo đảm tổng giá đánh giá của gói thầu là thấp nhất",
    ],
    answer:
      "C. Phải đảm bảo tổng số lượng hàng hóa mà các nhà thầu trúng thầu chào thầu tối thiểu bằng số lượng hàng hóa nêu trong hồ sơ mời thầu, đồng thời bảo đảm tổng giá đề nghị trúng thầu của gói thầu thấp nhất",
  },
  {
    question:
      "Câu 149. Đối với gói thầu mua sắm tập trung áp dụng lựa chọn nhà thầu căn cứ khối lượng mời thầu, danh sách phê duyệt nhà thầu trúng thầu bao gồm:",
    options: [
      "A. Danh sách chính (nhà thầu xếp thứ nhất) và danh sách dự bị (nhà thầu xếp thứ 2 trở đi)",
      "B. Danh sách chính (nhà thầu xếp thứ nhất) và danh sách nhà thầu không đáp ứng yêu cầu của hồ sơ mời thầu",
      "C. Danh sách các nhà thầu đáp ứng yêu cầu về năng lực và kinh nghiệm theo yêu cầu của hồ sơ mời thầu",
      "D. Danh sách chính (nhà thầu xếp thứ nhất và nhà thầu xếp thứ 2) và danh sách dự bị (nhà thầu xếp thứ 3 trở đi)",
    ],
    answer:
      "A. Danh sách chính (nhà thầu xếp thứ nhất) và danh sách dự bị (nhà thầu xếp thứ 2 trở đi)",
  },
  {
    question:
      "Câu 150. Thời gian có hiệu lực thi hành của Luật số 90/2025/QH15?",
    options: [
      "A. Từ ngày 01 tháng 7 năm 2025",
      "B. Từ ngày 04 tháng 8 năm 2025",
      "C. Từ ngày 08 tháng 8 năm 2025",
      "D. Tất cả các đáp án trên đều sai",
    ],
    answer: "A. Từ ngày 01 tháng 7 năm 2025",
  },
];
