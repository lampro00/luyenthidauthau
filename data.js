const questions = [
  {
    question:
      "1. Chứng thư số sử dụng trên Hệ thống phải đáp ứng điều kiện nào? (Không chính xác)",
    options: [
      "A. Do tổ chức cung cấp dịch vụ chứng thực chữ ký số công cộng cấp",
      "B. Do tổ chức cung cấp dịch vụ chứng thực chữ ký số chuyên dùng Chính phủ cấp",
      "C. Một trong hai đáp án trên",
      "D. Do bất kỳ tổ chức nào cấp",
    ],
    answer: "D. Do bất kỳ tổ chức nào cấp",
  },
  {
    question:
      "2. Nếu phát sinh tình huống chưa được quy định cụ thể trong Luật, chủ đầu tư xử lý thế nào? (Chính xác)",
    options: [
      "A. Xin ý kiến cơ quan chủ quản",
      "B. Xin ý kiến Chủ đầu tư",
      "C. Quyết định và chịu trách nhiệm, bảo đảm cạnh tranh, minh bạch, hiệu quả, kinh tế và trách nhiệm giải trình",
      "D. Hủy thầu",
    ],
    answer:
      "C. Quyết định và chịu trách nhiệm, bảo đảm cạnh tranh, minh bạch, hiệu quả, kinh tế và trách nhiệm giải trình",
  },
  {
    question:
      "3. Thời hạn áp dụng thỏa thuận khung trong mua sắm tập trung tối đa là bao nhiêu tháng",
    options: ["A. 12 tháng", "B. 24 tháng", "C. 36 tháng", "D. 06 tháng"],
    answer: "C. 36 tháng",
  },
  {
    question:
      "4. Khi E-HSMT có yêu cầu cung cấp hàng mẫu, nhà thầu được nộp bổ sung hàng mẫu trong thời hạn bao lâu sau thời điểm đóng thầu? (Không chính xác)",
    options: [
      "A. 2 ngày làm việc",
      "B. 3 ngày làm việc",
      "C. 5 ngày làm việc",
      "D. 7 ngày làm việc",
    ],
    answer: "D. 7 ngày làm việc",
  },
  {
    question:
      "5. Tỷ lệ cổ phần, vốn góp giữa các bên trong liên danh được xác định tại thời điểm nào? (Chính xác)",
    options: [
      "A. Sau khi mở thầu",
      "B. Khi ký hợp đồng",
      "C. Trước thời điểm đóng thầu",
      "D. Khi phê duyệt kết quả lựa chọn nhà thầu",
    ],
    answer: "C. Trước thời điểm đóng thầu",
  },
  {
    question: "6. Ngôn ngữ sử dụng trong đấu thầu quốc tế là gì? (Chính xác)",
    options: [
      "A. Tiếng Việt",
      "B. Tiếng Anh hoặc tiếng Việt và tiếng Anh",
      "C. Tiếng Pháp",
      "D. Tiếng Trung",
    ],
    answer: "B. Tiếng Anh hoặc tiếng Việt và tiếng Anh",
  },
  {
    question: "7. Sản phẩm, dịch vụ công là gì? (Không chính xác)",
    options: [
      "A. Sản phẩm, dịch vụ thiết yếu đối với đời sống kinh tế - xã hội hoặc bảo đảm quốc phòng, an ninh",
      "B. Bao gồm sản phẩm, dịch vụ công ích và dịch vụ sự nghiệp công",
      "C. Đáp án A và B đều đúng",
      "D. Gồm sản phẩm, dịch vụ công ích và sản phẩm công",
    ],
    answer: "B. Bao gồm sản phẩm, dịch vụ công ích và dịch vụ sự nghiệp công",
  },
  {
    question:
      "8. Điều kiện nào sau đây KHÔNG phải là điều kiện áp dụng mua sắm tập trung? (Chính xác)",
    options: [
      "A. Hàng hóa, dịch vụ cần mua sắm với số lượng lớn, chủng loại tương tự ở một hoặc nhiều cơ quan, tổ chức, đơn vị",
      "B. Thuộc danh mục hàng hóa, dịch vụ áp dụng mua sắm tập trung do cơ quan có thẩm quyền ban hành",
      "C. Chỉ áp dụng cho hàng hóa nhập khẩu",
      "D. Có thể áp dụng cho thuốc hiếm, thuốc cần mua với số lượng ít",
    ],
    answer: "C. Chỉ áp dụng cho hàng hóa nhập khẩu",
  },
  {
    question: "9. Đấu thầu hạn chế được áp dụng khi nào? (Chính xác)",
    options: [
      "A. Khi gói thầu có giá trị trên 100 tỷ đồng",
      "B. Khi nhà tài trợ yêu cầu tổ chức đấu thầu quốc tế",
      "C. Khi gói thầu có yêu cầu kỹ thuật cao hoặc đặc thù mà chỉ một số nhà thầu đáp ứng",
      "D. Khi chủ đầu tư muốn rút ngắn thời gian đấu thầu",
    ],
    answer:
      "C. Khi gói thầu có yêu cầu kỹ thuật cao hoặc đặc thù mà chỉ một số nhà thầu đáp ứng",
  },
  {
    question:
      "10. Khi nào chủ đầu tư phải yêu cầu nhà thầu chỉ chào thuốc xuất xứ trong nước trong hồ sơ mời thầu? (Chính xác)",
    options: [
      "A. Khi có ít nhất 2 hãng trong nước sản xuất đáp ứng tiêu chí kỹ thuật",
      "B. Khi có ít nhất 3 hãng trong nước sản xuất đáp ứng tiêu chí kỹ thuật, chất lượng, giá và khả năng cung cấp",
      "C. Khi có ít nhất 5 hãng trong nước sản xuất đáp ứng tiêu chí kỹ thuật, giá và khả năng thanh toán",
      "D. Khi Bộ Y tế có văn bản riêng yêu cầu",
    ],
    answer:
      "B. Khi có ít nhất 3 hãng trong nước sản xuất đáp ứng tiêu chí kỹ thuật, chất lượng, giá và khả năng cung cấp",
  },
  {
    question:
      "11. Chủ đầu tư phải đăng tải thông tin về nhà thầu nước ngoài trúng thầu tại Việt Nam trong thời hạn bao lâu kể từ ngày phê duyệt kết quả lựa chọn nhà thầu? (Không chính xác)",
    options: [
      "A. 3 ngày làm việc",
      "B. 5 ngày làm việc",
      "C. 7 ngày làm việc",
      "D. 10 ngày làm việc",
    ],
    answer: "B. 5 ngày làm việc",
  },
  {
    question:
      "12. Chủ đầu tư phải cập nhật tiến độ thực tế thực hiện hợp đồng khi nào? (Chính xác)",
    options: [
      "A. Khi hợp đồng kết thúc",
      "B. Khi có yêu cầu của nhà thầu",
      "C. Khi thực hiện xong các mốc hoàn thành quy định trong hợp đồng",
      "D. Khi có yêu cầu của cơ quan quản lý",
    ],
    answer: "C. Khi thực hiện xong các mốc hoàn thành quy định trong hợp đồng",
  },
  {
    question:
      "13. Đối với gói thầu xây lắp, mua sắm hàng hóa, dịch vụ phi tư vấn, khi nào nhà thầu không được phép thay thế nhân sự chủ chốt trong hồ sơ dự thầu? (Không chính xác)",
    options: [
      "A. Khi nhân sự không đáp ứng yêu cầu",
      "B. Vì lý do bất khảng kháng",
      "C. Trong mọi trường hợp nếu kê khai nhân sự không trung thực",
      "D. Khi nhân sự chuyển công tác",
    ],
    answer: "C. Trong mọi trường hợp nếu kê khai nhân sự không trung thực",
  },
  {
    question:
      "14. Hồ sơ dự thầu không bắt buộc phải có tài liệu, văn bản nào sau đây, trừ trường hợp có quy định cụ thể tại hồ sơ mời thầu? (Không chính xác)",
    options: [
      "A. Bản gốc hồ sơ dự thầu",
      "B. Đơn dự thầu",
      "C. Giấy phép bán hàng",
      "D. Thỏa thuận liên danh",
    ],
    answer: "C. Giấy phép bán hàng",
  },
  {
    question:
      "15. Trường hợp Chủ đầu tư giao cho Tổ thẩm định thực hiện việc thẩm định hồ sơ mời thầu, chi phí thẩm định Hồ sơ mời thầu bằng bao nhiêu phần trăm giá gói thầu? (Chính xác)",
    options: ["A. 0,1%", "B. 0,2%", "C. 0,3%", "D. 0,5%"],
    answer: "B. 0,2%",
  },
  {
    question:
      "16. Phương pháp giá thấp nhất thường được áp dụng trong trường hợp nào sau đây? (Chính xác)",
    options: [
      "A. Gói thầu mà các đề xuất về kỹ thuật, tài chính, thương mại được coi là cùng một mặt bằng khi đáp ứng các yêu cầu của hồ sơ mời thầu",
      "B. Gói thầu có nhiều yếu tố kỹ thuật khác biệt, đặc thù",
      "C. Gói thầu chỉ có một nhà thầu tham dự",
      "D. Gói thầu hỗn hợp có nhiều phương án kỹ thuật",
    ],
    answer:
      "A. Gói thầu mà các đề xuất về kỹ thuật, tài chính, thương mại được coi là cùng một mặt bằng khi đáp ứng các yêu cầu của hồ sơ mời thầu",
  },
  {
    question:
      "17. Khi phát hiện hành vi vi phạm dẫn đến sai lệch kết quả lựa chọn nhà thầu, Chủ đầu tư có thể thực hiện biện pháp nào? (Chính xác)",
    options: [
      "A. Đình chỉ cuộc thầu",
      "B. Không công nhận kết quả lựa chọn nhà thầu",
      "C. Xử lý vi phạm trong đấu thầu",
      "D. Tất cả các đáp án trên",
    ],
    answer: "B. Không công nhận kết quả lựa chọn nhà thầu",
  },
  {
    question:
      "18. Giá gói thầu được tính đúng, đủ toàn bộ chi phí để thực hiện gói thầu, kể cả: (Chính xác)",
    options: [
      "A. Chi phí dự phòng",
      "B. Phí, lệ phí và thuế",
      "C. Tùy chọn mua thêm",
      "D. Đáp án A và B",
    ],
    answer: "D. Đáp án A và B",
  },
  {
    question:
      "19. Hồ sơ dự thầu gói thầu tư vấn bắt buộc phải có tài liệu, văn bản nào sau đây, trừ trường hợp có quy định cụ thể tại hồ sơ mời thầu? (Chính xác)",
    options: [
      "A. Bảo đảm dự thầu",
      "B. Đơn dự thầu",
      "C. Giấy phép bán hàng",
      "D. Thỏa thuận liên danh",
    ],
    answer: "B. Đơn dự thầu",
  },
  {
    question:
      "20. Doanh nghiệp khởi nghiệp sáng tạo trong nước khi chào thầu sản phẩm đổi mới sáng tạo của doanh nghiệp đó không phải đáp ứng yêu cầu nào trong thời hạn 06 năm? (Không chính xác)",
    options: [
      "A. Năng lực tài chính",
      "B. Số năm hoạt động trong cùng ngành nghề",
      "C. Đáp án A và B đều đúng",
      "D. Chỉ cần đáp ứng yêu cầu về kỹ thuật",
    ],
    answer: "D. Chỉ cần đáp ứng yêu cầu về kỹ thuật",
  },
  {
    question:
      "21. Cơ sở khám bệnh, chữa bệnh có thể lựa chọn nhà thầu cung cấp hóa chất, vật tư xét nghiệm, thiết bị y tế theo cách thức nào sau đây? (Chính xác)",
    options: [
      "A. Lựa chọn nhà thầu cung cấp hóa chất, vật tư xét nghiệm và nhà thầu trúng thầu chịu trách nhiệm cung cấp thiết bị y tế để sử dụng hóa chất, vật tư xét nghiệm đó",
      "B. Lựa chọn nhà thầu theo số lượng dịch vụ kỹ thuật",
      "C. Lựa chọn nhà thầu thực hiện gói thầu cung cấp thiết bị y tế, hóa chất, vật tư xét nghiệm",
      "D. Tất cả các đáp án trên",
    ],
    answer: "D. Tất cả các đáp án trên",
  },
  {
    question: "22. Khi nào áp dụng hợp đồng theo đơn giá cố định? (Chính xác)",
    options: [
      "A. Khi chưa xác định được rõ ràng bản chất công việc",
      "B. Khi bản chất công việc đã xác định rõ nhưng chưa xác định được chính xác số lượng, khối lượng công việc thực tế",
      "C. Khi phạm vi công việc có thể thay đổi lớn",
      "D. Khi cần thanh toán theo kết quả đầu ra",
    ],
    answer:
      "B. Khi bản chất công việc đã xác định rõ nhưng chưa xác định được chính xác số lượng, khối lượng công việc thực tế",
  },
  {
    question:
      "23. Tiêu chuẩn đánh giá về kỹ thuật đối với gói thầu xây lắp có thể sử dụng phương pháp nào? (Chính xác)",
    options: [
      "A. Đạt, không đạt",
      "B. Chấm điểm",
      "C. Đáp án A và B đều đúng",
      "D. Tất cả các đáp án trên đều sai",
    ],
    answer: "C. Đáp án A và B đều đúng",
  },
  {
    question:
      "24. Nhà thầu tham dự thầu gói thầu mua sắm hàng hóa phải độc lập về pháp lý và tài chính với bên nào sau đây? (Không chính xác)",
    options: [
      "A. Nhà thầu phụ cùng tham dự thầu gói thầu đó",
      "B. Nhà thầu khác cùng tham dự thầu",
      "C. Chủ đầu tư",
      "D. Nhà cung cấp vật tư",
    ],
    answer: "A. Nhà thầu phụ cùng tham dự thầu gói thầu đó",
  },
  {
    question: "25. Giá trị bảo đảm thực hiện hợp đồng là? (Chính xác)",
    options: [
      "A. 2-10% giá gói thầu",
      "B. 2-3% giá gói thầu",
      "C. 2-10% giá hợp đồng",
      "D. Do Chủ đầu tư quyết định",
    ],
    answer: "C. 2-10% giá hợp đồng",
  },
  {
    question:
      "26. Khi nào nhà thầu nước ngoài không phải liên danh với nhà thầu trong nước hoặc không phải sử dụng nhà thầu phụ trong nước? (Chính xác)",
    options: [
      "A. Khi nhà thầu nước ngoài có vốn góp tại Việt Nam",
      "B. Khi nhà thầu nước ngoài có đủ năng lực thực hiện gói thầu",
      "C. Khi nhà thầu trong nước không đủ năng lực tham gia vào bất kỳ phần công việc nào của gói thầu",
      "D. Khi dự án thuộc lĩnh vực công nghệ cao",
    ],
    answer:
      "C. Khi nhà thầu trong nước không đủ năng lực tham gia vào bất kỳ phần công việc nào của gói thầu",
  },
  {
    question:
      "27. Hợp đồng theo thời gian thường áp dụng cho loại công việc nào? (Chính xác)",
    options: [
      "A. Sửa chữa, bảo trì công trình, máy móc, thiết bị hoặc dịch vụ tư vấn khó xác định phạm vi và thời gian",
      "B. Mua sắm hàng hóa thông dụng",
      "C. Xây lắp công trình lớn",
      "D. Đầu tư phát triển công nghệ cao",
    ],
    answer:
      "A. Sửa chữa, bảo trì công trình, máy móc, thiết bị hoặc dịch vụ tư vấn khó xác định phạm vi và thời gian",
  },
  {
    question:
      "28. Nhà thầu tham dự gói thầu chìa khóa trao tay phải độc lập về pháp lý và tài chính với bên nào? (Không chính xác)",
    options: [
      "A. Nhà thầu cung cấp vật tư",
      "B. Nhà thầu lập, thẩm tra báo cáo nghiên cứu tiền khả thi",
      "C. Nhà thầu cung cấp hàng hóa khác cho chủ đầu tư",
      "D. Nhà thầu phụ",
    ],
    answer: "C. Nhà thầu cung cấp hàng hóa khác cho chủ đầu tư",
  },
  {
    question:
      "29. Phương pháp giá thấp nhất thường được áp dụng trong trường hợp nào sau đây? (Chính xác)",
    options: [
      "A. Gói thầu mà các đề xuất về kỹ thuật, tài chính, thương mại được coi là cùng một mặt bằng khi đáp ứng các yêu cầu của hồ sơ mời thầu",
      "B. Gói thầu có nhiều yếu tố kỹ thuật khác biệt",
      "C. Gói thầu chỉ có một nhà thầu tham dự",
      "D. Gói thầu hỗn hợp có nhiều phương án kỹ thuật",
    ],
    answer:
      "A. Gói thầu mà các đề xuất về kỹ thuật, tài chính, thương mại được coi là cùng một mặt bằng khi đáp ứng các yêu cầu của hồ sơ mời thầu",
  },
  {
    question:
      "30. Chủ đầu tư có trách nhiệm gì khi thực hiện hợp đồng? (Chính xác)",
    options: [
      "A. Không thay đổi tiến độ",
      "B. Không thay đổi giá hợp đồng",
      "C. Quản lý tiến độ, chất lượng, chi phí và các nội dung khác của hợp đồng",
      "D. Không điều chỉnh hợp đồng",
    ],
    answer:
      "C. Quản lý tiến độ, chất lượng, chi phí và các nội dung khác của hợp đồng",
  },
  {
    question:
      "31. Nếu file đính kèm trong hồ sơ mời thầu không mở được, Chủ đầu tư phải làm gì? (Không chính xác)",
    options: [
      "A. Huỷ thầu",
      "B. Đăng tải và phát hành lại toàn bộ hồ sơ mời thầu",
      "C. Gửi email file đính kèm cho nhà thầu",
      "D. Chỉ sửa file đính kèm bị lỗi và đăng tải, phát hành lại file này",
    ],
    answer:
      "D. Chỉ sửa file đính kèm bị lỗi và đăng tải, phát hành lại file này",
  },
  {
    question:
      "32. Khi nhà thầu đề xuất biện pháp thi công khác, phần sai khác về khối lượng được xử lý như thế nào? (Chính xác)",
    options: [
      "A. Hiệu chỉnh sai lệch",
      "B. Loại nhà thầu",
      "C. Không hiệu chỉnh sai lệch, không tính là sai lệch thiếu",
      "D. Đàm phán lại khối lượng",
    ],
    answer: "C. Không hiệu chỉnh sai lệch, không tính là sai lệch thiếu",
  },
  {
    question:
      "33. Hội đồng tư vấn khoán chi cho các thành viên Hội đồng tư vấn, bộ phận thường trực giúp việc của Hội đồng tư vấn và các chi phí khác để thực hiện việc tư vấn giải quyết kiến nghị. Trường hợp nhà thầu rút đơn kiến nghị sau khi Hội đồng tư vấn đã tổ chức họp thì: (Chính xác)",
    options: [
      "A. Được hoàn trả 100% chi phí đã nộp",
      "B. Được hoàn trả 50% chi phí đã nộp",
      "C. Không được hoàn trả chi phí giải quyết kiến nghị",
      "D. Không bị xử lý gì",
    ],
    answer: "C. Không được hoàn trả chi phí giải quyết kiến nghị",
  },
  {
    question:
      "34. Nếu E-HSMT không đầy đủ thông tin hoặc không rõ ràng, chủ đầu tư thầu phải làm gì? (Chính xác)",
    options: [
      "A. Không cần làm gì",
      "B. Sửa đổi, bổ sung và đăng tải lại E-HSMT",
      "C. Gửi thông báo cho nhà thầu",
      "D. Chỉ bổ sung bằng văn bản giấy",
    ],
    answer: "B. Sửa đổi, bổ sung và đăng tải lại E-HSMT",
  },
  {
    question:
      "35. Đối với gói thầu xây lắp, mua sắm hàng hóa, dịch vụ phi tư vấn, trường hợp hợp đồng tương tự mà nhà thầu đề xuất không đáp ứng yêu cầu, tổ chuyên gia xử lý như thế nào? (Chính xác)",
    options: [
      "A. Loại bỏ hồ sơ dự thầu của nhà thầu",
      "B. Không cho phép bổ sung, thay thế hợp đồng tương tự khác",
      "C. Có văn bản gửi Chủ đầu tư để đề nghị nhà thầu làm rõ hồ sơ dự thầu, cho phép bổ sung, thay thế hợp đồng tương tự khác để đánh giá",
      "D. Xin ý kiến của Chủ đầu tư",
    ],
    answer:
      "C. Có văn bản gửi Chủ đầu tư để đề nghị nhà thầu làm rõ hồ sơ dự thầu, cho phép bổ sung, thay thế hợp đồng tương tự khác để đánh giá",
  },
  {
    question:
      "36. Thời hạn xử lý hồ sơ đăng ký tài khoản trên Hệ thống mạng đấu thầu quốc gia là bao lâu? (Chính xác)",
    options: [
      "A. 01 ngày làm việc",
      "B. 02 ngày làm việc",
      "C. 03 ngày làm việc",
      "D. 05 ngày làm việc",
    ],
    answer: "B. 02 ngày làm việc",
  },
  {
    question:
      "37. Đình chỉ cuộc thầu, không công nhận kết quả lựa chọn nhà thầu được áp dụng trong trường hợp nào dưới đây? (Chính xác)",
    options: [
      "A. Khi có bằng chứng tổ chức, cá nhân tham gia hoạt động đấu thầu có hành vi vi phạm quy định tại Điều 16 của pháp Luật đấu thầu hoặc hành vi vi phạm quy định của pháp luật có liên quan dẫn đến không bảo đảm cạnh tranh, công bằng, minh bạch và hiệu quả kinh tế hoặc làm sai lệch kết quả lựa chọn nhà thầu",
      "B. Tất cả các hồ sơ dự thầu về cơ bản không đáp ứng được các yêu cầu trong hồ sơ mời thầu.",
      "C. Thay đổi phạm vi, mục tiêu đầu tư đã được nêu trong hồ sơ mời thầu.",
      "D. Không có đáp án nào đúng.",
    ],
    answer:
      "A. Khi có bằng chứng tổ chức, cá nhân tham gia hoạt động đấu thầu có hành vi vi phạm quy định tại Điều 16 của pháp Luật đấu thầu hoặc hành vi vi phạm quy định của pháp luật có liên quan dẫn đến không bảo đảm cạnh tranh, công bằng, minh bạch và hiệu quả kinh tế hoặc làm sai lệch kết quả lựa chọn nhà thầu",
  },
  {
    question:
      "38. Điều kiện nào sau đây KHÔNG phải là điều kiện tổ chức đấu thầu quốc tế để lựa chọn nhà thầu? (Chính xác)",
    options: [
      "A. Nhà tài trợ vốn yêu cầu đấu thầu quốc tế",
      "B. Gói thầu mà nhà thầu trong nước không đáp ứng yêu cầu",
      "C. Gói thầu mua sắm hàng hóa trong nước không sản xuất được",
      "D. Gói thầu mua sắm hàng hóa đã được nhập khẩu và chào bán tại Việt Nam",
    ],
    answer:
      "D. Gói thầu mua sắm hàng hóa đã được nhập khẩu và chào bán tại Việt Nam",
  },
  {
    question:
      "39. Trong đấu thầu quốc tế, đồng tiền dự thầu tối đa được phép quy định trong hồ sơ mời thầu là bao nhiêu loại? (Không chính xác)",
    options: [
      "A. 1 loại đồng tiền",
      "B. 2 loại đồng tiền",
      "C. 3 loại đồng tiền",
      "D. 4 loại đồng tiền",
    ],
    answer: "A. 1 loại đồng tiền",
  },
  {
    question:
      "40. Điều kiện nào sau đây KHÔNG phải là điều kiện để nhà thầu tư vấn tổ chức được xem xét, đề nghị trúng thầu? (Chính xác)",
    options: [
      "A. Có hồ sơ dự thầu, hồ sơ đề xuất hợp lệ",
      "B. Có đề xuất về kỹ thuật đáp ứng yêu cầu của hồ sơ mời thầu, hồ sơ yêu cầu",
      "C. Có giá dự thầu thấp nhất",
      "D. Có giá đề nghị trúng thầu không vượt giá gói thầu được phê duyệt",
    ],
    answer: "C. Có giá dự thầu thấp nhất",
  },
];
