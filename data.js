const questions = [
  {
    question:
      " Chứng thư số sử dụng trên Hệ thống phải đáp ứng điều kiện nào?  ",
    options: [
      "A. Do tổ chức cung cấp dịch vụ chứng thực chữ ký số công cộng cấp",
      "B. Do tổ chức cung cấp dịch vụ chứng thực chữ ký số chuyên dùng Chính phủ cấp",
      "C. Một trong hai đáp án trên",
      "D. Do bất kỳ tổ chức nào cấp",
    ],
    answer: "C. Một trong hai đáp án trên",
  },
  {
    question:
      " Nếu phát sinh tình huống chưa được quy định cụ thể trong Luật, chủ đầu tư xử lý thế nào?  ",
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
      " Thời hạn áp dụng thỏa thuận khung trong mua sắm tập trung tối đa là bao nhiêu tháng",
    options: ["A. 12 tháng", "B. 24 tháng", "C. 36 tháng", "D. 06 tháng"],
    answer: "C. 36 tháng",
  },
  {
    question:
      " Khi E-HSMT có yêu cầu cung cấp hàng mẫu, nhà thầu được nộp bổ sung hàng mẫu trong thời hạn bao lâu sau thời điểm đóng thầu?  ",
    options: [
      "A. 2 ngày làm việc",
      "B. 3 ngày làm việc",
      "C. 5 ngày làm việc",
      "D. 7 ngày làm việc",
    ],
    answer: "C. 5 ngày làm việc",
  },
  {
    question:
      "  Tỷ lệ cổ phần, vốn góp giữa các bên trong liên danh được xác định tại thời điểm nào? ",
    options: [
      "A. Sau khi mở thầu",
      "B. Khi ký hợp đồng",
      "C. Trước thời điểm đóng thầu",
      "D. Khi phê duyệt kết quả lựa chọn nhà thầu",
    ],
    answer: "C. Trước thời điểm đóng thầu",
  },
  {
    question: "  Ngôn ngữ sử dụng trong đấu thầu quốc tế là gì?  ",
    options: [
      "A. Tiếng Việt",
      "B. Tiếng Anh hoặc tiếng Việt và tiếng Anh",
      "C. Tiếng Pháp",
      "D. Tiếng Trung",
    ],
    answer: "B. Tiếng Anh hoặc tiếng Việt và tiếng Anh",
  },
  {
    question: "  Sản phẩm, dịch vụ công là gì? ",
    options: [
      "A. Sản phẩm, dịch vụ thiết yếu đối với đời sống kinh tế - xã hội hoặc bảo đảm quốc phòng, an ninh",
      "B. Bao gồm sản phẩm, dịch vụ công ích và dịch vụ sự nghiệp công",
      "C. Đáp án A và B đều đúng",
      "D. Gồm sản phẩm, dịch vụ công ích và sản phẩm công",
    ],
    answer: "C. Đáp án A và B đều đúng",
  },
  {
    question:
      " Điều kiện nào sau đây KHÔNG phải là điều kiện áp dụng mua sắm tập trung?  ",
    options: [
      "A. Hàng hóa, dịch vụ cần mua sắm với số lượng lớn, chủng loại tương tự ở một hoặc nhiều cơ quan, tổ chức, đơn vị",
      "B. Thuộc danh mục hàng hóa, dịch vụ áp dụng mua sắm tập trung do cơ quan có thẩm quyền ban hành",
      "C. Chỉ áp dụng cho hàng hóa nhập khẩu",
      "D. Có thể áp dụng cho thuốc hiếm, thuốc cần mua với số lượng ít",
    ],
    answer: "C. Chỉ áp dụng cho hàng hóa nhập khẩu",
  },
  {
    question: " Đấu thầu hạn chế được áp dụng khi nào? ",
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
      "  Khi nào chủ đầu tư phải yêu cầu nhà thầu chỉ chào thuốc xuất xứ trong nước trong hồ sơ mời thầu?  ",
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
      " Chủ đầu tư phải đăng tải thông tin về nhà thầu nước ngoài trúng thầu tại Việt Nam trong thời hạn bao lâu kể từ ngày phê duyệt kết quả lựa chọn nhà thầu?  ",
    options: [
      "A. 3 ngày làm việc",
      "B. 5 ngày làm việc",
      "C. 7 ngày làm việc",
      "D. 10 ngày làm việc",
    ],
    answer: "C. 7 ngày làm việc",
  },
  {
    question:
      " Chủ đầu tư phải cập nhật tiến độ thực tế thực hiện hợp đồng khi nào? ",
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
      " Đối với gói thầu xây lắp, mua sắm hàng hóa, dịch vụ phi tư vấn, khi nào nhà thầu không được phép thay thế nhân sự chủ chốt trong hồ sơ dự thầu? ",
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
      " Hồ sơ dự thầu không bắt buộc phải có tài liệu, văn bản nào sau đây, trừ trường hợp có quy định cụ thể tại hồ sơ mời thầu?  ",
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
      " Trường hợp Chủ đầu tư giao cho Tổ thẩm định thực hiện việc thẩm định hồ sơ mời thầu, chi phí thẩm định Hồ sơ mời thầu bằng bao nhiêu phần trăm giá gói thầu? ",
    options: ["A. 0,1%", "B. 0,2%", "C. 0,3%", "D. 0,5%"],
    answer: "A. 0,1%",
  },
  {
    question:
      " Phương pháp giá thấp nhất thường được áp dụng trong trường hợp nào sau đây? ",
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
      "17. Khi phát hiện hành vi vi phạm dẫn đến sai lệch kết quả lựa chọn nhà thầu, Chủ đầu tư có thể thực hiện biện pháp nào? ",
    options: [
      "A. Đình chỉ cuộc thầu",
      "B. Không công nhận kết quả lựa chọn nhà thầu",
      "C. Xử lý vi phạm trong đấu thầu",
      "D. Tất cả các đáp án trên",
    ],
    answer: "D. Tất cả các đáp án trên",
  },
  {
    question:
      " 18. Giá gói thầu được tính đúng, đủ toàn bộ chi phí để thực hiện gói thầu, kể cả: ",
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
      " Hồ sơ dự thầu gói thầu tư vấn bắt buộc phải có tài liệu, văn bản nào sau đây, trừ trường hợp có quy định cụ thể tại hồ sơ mời thầu? ",
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
      " Doanh nghiệp khởi nghiệp sáng tạo trong nước khi chào thầu sản phẩm đổi mới sáng tạo của doanh nghiệp đó không phải đáp ứng yêu cầu nào trong thời hạn 06 năm? ",
    options: [
      "A. Năng lực tài chính",
      "B. Số năm hoạt động trong cùng ngành nghề",
      "C. Đáp án A và B đều đúng",
      "D. Chỉ cần đáp ứng yêu cầu về kỹ thuật",
    ],
    answer: "B. Số năm hoạt động trong cùng ngành nghề",
  },
  {
    question:
      " Cơ sở khám bệnh, chữa bệnh có thể lựa chọn nhà thầu cung cấp hóa chất, vật tư xét nghiệm, thiết bị y tế theo cách thức nào sau đây? ",
    options: [
      "A. Lựa chọn nhà thầu cung cấp hóa chất, vật tư xét nghiệm và nhà thầu trúng thầu chịu trách nhiệm cung cấp thiết bị y tế để sử dụng hóa chất, vật tư xét nghiệm đó",
      "B. Lựa chọn nhà thầu theo số lượng dịch vụ kỹ thuật",
      "C. Lựa chọn nhà thầu thực hiện gói thầu cung cấp thiết bị y tế, hóa chất, vật tư xét nghiệm",
      "D. Tất cả các đáp án trên",
    ],
    answer: "D. Tất cả các đáp án trên",
  },
  {
    question: "  Khi nào áp dụng hợp đồng theo đơn giá cố định? ",
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
      " Tiêu chuẩn đánh giá về kỹ thuật đối với gói thầu xây lắp có thể sử dụng phương pháp nào? ",
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
      "  Nhà thầu tham dự thầu gói thầu mua sắm hàng hóa phải độc lập về pháp lý và tài chính với bên nào sau đây? ",
    options: [
      "A. Nhà thầu phụ cùng tham dự thầu gói thầu đó",
      "B. Nhà thầu khác cùng tham dự thầu",
      "C. Chủ đầu tư",
      "D. Nhà cung cấp vật tư",
    ],
    answer: "C. Chủ đầu tư",
  },
  {
    question: " Giá trị bảo đảm thực hiện hợp đồng là? ",
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
      " Khi nào nhà thầu nước ngoài không phải liên danh với nhà thầu trong nước hoặc không phải sử dụng nhà thầu phụ trong nước? ",
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
      " Hợp đồng theo thời gian thường áp dụng cho loại công việc nào? ",
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
      " Nhà thầu tham dự gói thầu chìa khóa trao tay phải độc lập về pháp lý và tài chính với bên nào? ",
    options: [
      "A. Nhà thầu cung cấp vật tư",
      "B. Nhà thầu lập, thẩm tra báo cáo nghiên cứu tiền khả thi",
      "C. Nhà thầu cung cấp hàng hóa khác cho chủ đầu tư",
      "D. Nhà thầu phụ",
    ],
    answer: "B. Nhà thầu lập, thẩm tra báo cáo nghiên cứu tiền khả thi",
  },
  // {
  //   question:
  //     " Phương pháp giá thấp nhất thường được áp dụng trong trường hợp nào sau đây? ",
  //   options: [
  //     "A. Gói thầu mà các đề xuất về kỹ thuật, tài chính, thương mại được coi là cùng một mặt bằng khi đáp ứng các yêu cầu của hồ sơ mời thầu",
  //     "B. Gói thầu có nhiều yếu tố kỹ thuật khác biệt",
  //     "C. Gói thầu chỉ có một nhà thầu tham dự",
  //     "D. Gói thầu hỗn hợp có nhiều phương án kỹ thuật",
  //   ],
  //   answer:
  //     "A. Gói thầu mà các đề xuất về kỹ thuật, tài chính, thương mại được coi là cùng một mặt bằng khi đáp ứng các yêu cầu của hồ sơ mời thầu",
  // },
  {
    question: " Chủ đầu tư có trách nhiệm gì khi thực hiện hợp đồng? ",
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
      " Nếu file đính kèm trong hồ sơ mời thầu không mở được, Chủ đầu tư phải làm gì? ",
    options: [
      "A. Huỷ thầu",
      "B. Đăng tải và phát hành lại toàn bộ hồ sơ mời thầu",
      "C. Gửi email file đính kèm cho nhà thầu",
      "D. Chỉ sửa file đính kèm bị lỗi và đăng tải, phát hành lại file này",
    ],
    answer: "B. Đăng tải và phát hành lại toàn bộ hồ sơ mời thầu",
  },
  {
    question:
      " Khi nhà thầu đề xuất biện pháp thi công khác, phần sai khác về khối lượng được xử lý như thế nào? ",
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
      " Hội đồng tư vấn khoán chi cho các thành viên Hội đồng tư vấn, bộ phận thường trực giúp việc của Hội đồng tư vấn và các chi phí khác để thực hiện việc tư vấn giải quyết kiến nghị. Trường hợp nhà thầu rút đơn kiến nghị sau khi Hội đồng tư vấn đã tổ chức họp thì: ",
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
      "34. Nếu E-HSMT không đầy đủ thông tin hoặc không rõ ràng, chủ đầu tư thầu phải làm gì? ",
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
      " Đối với gói thầu xây lắp, mua sắm hàng hóa, dịch vụ phi tư vấn, trường hợp hợp đồng tương tự mà nhà thầu đề xuất không đáp ứng yêu cầu, tổ chuyên gia xử lý như thế nào? ",
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
      " Thời hạn xử lý hồ sơ đăng ký tài khoản trên Hệ thống mạng đấu thầu quốc gia là bao lâu? ",
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
      " Đình chỉ cuộc thầu, không công nhận kết quả lựa chọn nhà thầu được áp dụng trong trường hợp nào dưới đây? ",
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
      " Điều kiện nào sau đây KHÔNG phải là điều kiện tổ chức đấu thầu quốc tế để lựa chọn nhà thầu? ",
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
      " Trong đấu thầu quốc tế, đồng tiền dự thầu tối đa được phép quy định trong hồ sơ mời thầu là bao nhiêu loại? ",
    options: [
      "A. 1 loại đồng tiền",
      "B. 2 loại đồng tiền",
      "C. 3 loại đồng tiền",
      "D. 4 loại đồng tiền",
    ],
    answer: "C. 3 loại đồng tiền",
  },
  {
    question:
      " Điều kiện nào sau đây KHÔNG phải là điều kiện để nhà thầu tư vấn tổ chức được xem xét, đề nghị trúng thầu? ",
    options: [
      "A. Có hồ sơ dự thầu, hồ sơ đề xuất hợp lệ",
      "B. Có đề xuất về kỹ thuật đáp ứng yêu cầu của hồ sơ mời thầu, hồ sơ yêu cầu",
      "C. Có giá dự thầu thấp nhất",
      "D. Có giá đề nghị trúng thầu không vượt giá gói thầu được phê duyệt",
    ],
    answer: "C. Có giá dự thầu thấp nhất",
  },
  {
    question:
      "41.Đối với gói thầu cung cấp dịch vụ phi tư vấn, mua sắm hàng hóa, xây lắp, hỗn hợp, nhà thầu được xem xét, đề nghị trúng thầu khi đáp ứng điều kiện nào sau đây?",
    options: [
      "A. Có hồ sơ dự thầu, hồ sơ đề xuất hợp lệ",
      "B. Có năng lực, kinh nghiệm đáp ứng yêu cầu của hồ sơ mời thầu, hồ sơ yêu cầu",
      "C. Có giá đề nghị trúng thầu không vượt giá gói thầu được phê duyệt",
      "D. Tất cả các đáp án trên",
    ],
    answer: "D. Tất cả các đáp án trên",
  },
  {
    question:
      "43.Khi nào được áp dụng hình thức đặt hàng, giao nhiệm vụ khi lựa chọn nhà thầu cung cấp sản phẩm, dịch vụ công?",
    options: [
      "A. Khi cung cấp sản phẩm, dịch vụ công ích",
      "B. Khi cung cấp dịch vụ sự nghiệp công",
      "C. Khi Pháp luật quản lý ngành có quy định",
      "D. Cả 3 phương án trên",
    ],
    answer: "D. Cả 3 phương án trên",
  },
  {
    question:
      "42. File đính kèm trong E-HSDT không đáp ứng định dạng quy định sẽ được xử lý như thế nào?",
    options: [
      "A. Vẫn được xem xét, đánh giá",
      "B. Không được xem xét, đánh giá",
      "C. Được đánh giá lại sau",
      "D. Chỉ xem xét một phần",
    ],
    answer: "B. Không được xem xét, đánh giá",
  },
  // {
  //   question:
  //     "Phương thức một giai đoạn một túi hồ sơ KHÔNG áp dụng cho trường hợp nào?",
  //   options: [
  //     "A. Đấu thầu rộng rãi mua sắm hàng hóa",
  //     "B. Chào hàng cạnh tranh dịch vụ phi tư vấn",
  //     "C. Đấu thầu rộng rãi gói thầu tư vấn",
  //     "D. Chỉ định thầu xây lắp công trình",
  //   ],
  //   answer: "D. Chỉ định thầu xây lắp công trình",
  // },

  {
    question:
      "45.Chủ đầu tư chịu trách nhiệm đăng tải kế hoạch tổng thể lựa chọn nhà thầu trên Hệ thống mạng đấu thầu quốc gia trong thời hạn bao lâu kể từ ngày văn bản được ban hành?",
    options: [
      "A. 01 ngày làm việc",
      "B. 03 ngày làm việc",
      "C. 05 ngày làm việc",
      "D. 10 ngày",
    ],
    answer: "C. 05 ngày làm việc",
  },
  {
    question:
      "Cơ sở dữ liệu quốc gia về nhà thầu bao gồm thông tin nào sau đây?",
    options: [
      "A. Thông tin về địa chỉ nhà thầu",
      "B. Thông tin về số lượng lao động",
      "C. Thông tin về năng lực, kinh nghiệm của nhà thầu",
      "D. Thông tin về hợp đồng lao động cá nhân",
    ],
    answer: "C. Thông tin về năng lực, kinh nghiệm của nhà thầu",
  },
  {
    question:
      "Trường hợp cần điều chỉnh hình thức lựa chọn nhà thầu do thay đổi giá gói thầu, chủ đầu tư phải làm gì?",
    options: [
      "A. Không cần điều chỉnh",
      "B. Thông báo cho nhà thầu",
      "C. Điều chỉnh KHLCNT",
      "D. Hủy thầu",
    ],
    answer: "C. Điều chỉnh KHLCNT",
  },
  {
    question:
      "Trường hợp Chủ đầu tư giao cho Tổ thẩm định thực hiện việc thẩm định kết quả lựa chọn nhà thầu, chi phí thẩm định kết quả lựa chọn nhà thầu bằng bao nhiêu phần trăm giá gói thầu?",
    options: ["A. 0,05%", "B. 0,15%", "C. 0,1%", "D. 0,2%"],
    answer: "C. 0,1%",
  },
  {
    question: "Biện pháp nào sau đây KHÔNG phải là biện pháp bảo đảm dự thầu?",
    options: [
      "A. Đặt cọc",
      "B. Nộp thư bảo lãnh của tổ chức tín dụng",
      "C. Nộp giấy chứng nhận bảo hiểm bảo lãnh",
      "D. Ký hợp đồng nguyên tắc",
    ],
    answer: "D. Ký hợp đồng nguyên tắc",
  },
  {
    question:
      "Đối với gói thầu mua sắm hàng hóa, phải công khai chi tiết thông tin về các hạng mục hàng hóa trúng thầu, trừ nội dung nào?",
    options: [
      "A. Danh mục hàng hóa",
      "B. Ký mã hiệu",
      "C. Mã số thuế nhà thầu",
      "D. Đơn giá trúng thầu",
    ],
    answer: "C. Mã số thuế nhà thầu",
  },
  {
    question:
      "Trường hợp tất cả các nhà thầu tham dự thầu đều được hưởng ưu đãi như nhau thì:",
    options: [
      "A. Không cần tính ưu đãi để so sánh, xếp hạng",
      "B. Vẫn phải cộng ưu đãi vào giá dự thầu",
      "C. Chỉ tính ưu đãi cho nhà thầu có giá thấp nhất",
      "D. Chỉ tính ưu đãi cho nhà thầu trong nước",
    ],
    answer: "A. Không cần tính ưu đãi để so sánh, xếp hạng", // Vui lòng điền đáp án đúng vào đây
  },
  {
    question:
      "Hợp đồng theo đơn giá điều chỉnh được áp dụng trong trường hợp nào?",
    options: [
      "A. Gói thầu có thời gian thực hiện ngắn, giá cả ổn định",
      "B. Gói thầu có thời gian thực hiện dài và có rủi ro biến động giá đối với các chi phí đầu vào",
      "C. Gói thầu bảo hiểm công trình",
      "D. Gói thầu có thể xác định rõ giá trị hợp đồng ngay từ đầu",
    ],
    answer:
      "B. Gói thầu có thời gian thực hiện dài và có rủi ro biến động giá đối với các chi phí đầu vào", // Vui lòng điền đáp án đúng vào đây
  },
  {
    question:
      "Trường hợp đấu thầu quốc tế, chi phí dịch tài liệu được tính như thế nào?",
    options: [
      "A. Theo quy định của Bộ Tài chính",
      "B. Theo quy định của chủ đầu tư",
      "C. Phù hợp với giá thị trường, bảo đảm hiệu quả của gói thầu",
      "D. Theo giá cố định",
    ],
    answer: "C. Phù hợp với giá thị trường, bảo đảm hiệu quả của gói thầu",
  },
  {
    question:
      "54. Thời hạn áp dụng thỏa thuận khung trong mua sắm tập trung tối đa là bao nhiêu tháng?",
    options: ["A. 12 tháng", "B. 24 tháng", "C. 36 tháng", "D. 60 tháng"],
    answer: "C. 36 tháng",
  },
  {
    question:
      "Từ ngày 01/01/2025, đấu thầu qua mạng được áp dụng bắt buộc đối với hình thức nào?",
    options: [
      "A. Đấu thầu rộng rãi, đấu thầu hạn chế, chào hàng cạnh tranh trong nước",
      "B. Chỉ định thầu quốc tế",
      "C. Mua sắm trực tiếp",
      "D. Đàm phán giá",
    ],
    answer:
      "A. Đấu thầu rộng rãi, đấu thầu hạn chế, chào hàng cạnh tranh trong nước",
  },
  {
    question:
      "56. Tổng mức chi cho Hội đồng tư vấn giải quyết kiến nghị của nhà thầu không được vượt quá:",
    options: [
      "A. 50% số tiền nhà thầu nộp",
      "B. 70% số tiền nhà thầu nộp",
      "C. Số tiền nhà thầu có kiến nghị đã nộp",
      "D. 150% số tiền nhà thầu nộp",
    ],
    answer: "C. Số tiền nhà thầu có kiến nghị đã nộp", // Vui lòng điền đáp án đúng vào đây
  },
  {
    question:
      "Phương thức một giai đoạn hai túi hồ sơ được áp dụng trong trường hợp nào sau đây?",
    options: [
      "A. Đấu thầu rộng rãi, đấu thầu hạn chế đối với gói thầu cung cấp dịch vụ tư vấn",
      "B. Chào hàng cạnh tranh đối với gói thầu xây lắp",
      "C. Chỉ định thầu đối với gói thầu xây lắp",
      "D. Mua sắm trực tiếp đối với mua sắm hàng hóa",
    ],
    answer:
      "A. Đấu thầu rộng rãi, đấu thầu hạn chế đối với gói thầu cung cấp dịch vụ tư vấn",
  },
  {
    question: "Trường hợp nhà thầu có kiến nghị được kết luận là đúng thì:",
    options: [
      "A. Không được hoàn trả chi phí",
      "B. Được hoàn trả 50% chi phí",
      "C. Được hoàn trả toàn bộ chi phí giải quyết kiến nghị",
      "D. Không bị ảnh hưởng gì",
    ],
    answer: "C. Được hoàn trả toàn bộ chi phí giải quyết kiến nghị",
  },
  {
    question: "Đấu thầu trước được áp dụng trong trường hợp nào?",
    options: [
      "A. Thực hiện trước một số thủ tục trước khi điều ước quốc tế, thỏa thuận vay nước ngoài được ký kết hoặc trước khi dự án được phê duyệt đầu tư",
      "B. Khi đã có quyết định phê duyệt dự án đầu tư",
      "C. Khi đã có hợp đồng ký kết với nhà thầu",
      "D. Khi dự án đã hoàn thành",
    ],
    answer:
      "A. Thực hiện trước một số thủ tục trước khi điều ước quốc tế, thỏa thuận vay nước ngoài được ký kết hoặc trước khi dự án được phê duyệt đầu tư",
  },
  {
    question:
      "Nhà thầu trong nước được chuyển giao công nghệ để sản xuất hàng hóa có xuất xứ Việt Nam được hưởng ưu đãi trong thời hạn bao nhiêu năm kể từ khi sản phẩm lần đầu được sản xuất?",
    options: ["A. 03 năm", "B. 05 năm", "C. 07 năm", "D. 10 năm"],
    answer: "B. 05 năm",
  },
  {
    question:
      "Chủ đầu tư phát hành bản giấy hồ sơ mời quan tâm cho nhà thầu có giá trị pháp lý không?",
    options: [
      "A. Có giá trị pháp lý",
      "B. Không có giá trị pháp lý",
      "C. Tùy từng trường hợp",
      "D. Chỉ có giá trị nếu có chữ ký số",
    ],
    answer: "B. Không có giá trị pháp lý",
  },
  {
    question: "File đăng tải trên Hệ thống phải đáp ứng yêu cầu nào sau đây?",
    options: [
      "A. Được nén bằng phần mềm bất kỳ",
      "B. Không bị nhiễm virus, không bị lỗi, hỏng và không thiết lập mật khẩu",
      "C. Được mã hóa riêng",
      "D. Chỉ duyệt file PDF",
    ],
    answer:
      "B. Không bị nhiễm virus, không bị lỗi, hỏng và không thiết lập mật khẩu",
  },
  {
    question: "Văn bản điện tử trên Hệ thống KHÔNG bao gồm nội dung nào?",
    options: [
      "A. Thông tin về dự án",
      "B. Biên bản mở thầu",
      "C. Quyết định phê duyệt E-HSMT",
      "D. Văn bản hợp đồng giấy",
    ],
    answer: "D. Văn bản hợp đồng giấy",
  },
  {
    question:
      "Nhà thầu có trách nhiệm gì khi phát hiện E-HSMT không rõ ràng, gây khó khăn cho việc chuẩn bị E-HSDT?",
    options: [
      "A. Tự tìm hiểu",
      "B. Yêu cầu Chủ đầu tư làm rõ để chủ đầu tư, sửa đổi, bổ sung tài liệu",
      "C. Không cần làm gì",
      "D. Từ chối tham dự thầu",
    ],
    answer:
      "B. Yêu cầu Chủ đầu tư làm rõ để chủ đầu tư, sửa đổi, bổ sung tài liệu",
  },
  {
    question:
      "Đối với phương thức một giai đoạn hai túi hồ sơ việc mở thầu được tiến hành bao nhiêu lần?",
    options: ["A. 4 lần", "B. 3 lần", "C. 2 lần", "D. 1 lần"],
    answer: "D. 1 lần",
  },
  {
    question:
      "Phương pháp giá cố định trong đánh giá hồ sơ dự thầu gói thầu tư vấn được áp dụng khi nào?",
    options: [
      "A. Gói thầu tư vấn có quy trình thực hiện phức tạp",
      "B. Gói thầu tư vấn đơn giản, phạm vi công việc xác định chính xác, chi phí hợp lý, cụ thể và cố định",
      "C. Gói thầu tư vấn có nhiều phương án kỹ thuật",
      "D. Gói thầu tư vấn áp dụng đấu thầu quốc tế",
    ],
    answer:
      "B. Gói thầu tư vấn đơn giản, phạm vi công việc xác định chính xác, chi phí hợp lý, cụ thể và cố định",
  },
  {
    question: "Đặc điểm của phương thức hai giai đoạn hai túi hồ sơ là gì?",
    options: [
      "A. Chỉ mở một lần đối với toàn bộ hồ sơ dự thầu",
      "B. Chỉ áp dụng cho gói thầu tư vấn đơn giản",
      "C. Áp dụng cho gói thầu mua sắm hàng hóa, xây lắp, hỗn hợp có kỹ thuật, công nghệ mới, phức tạp, có tính đặc thù mà chưa xác định được chính xác các yêu cầu kỹ thuật cụ thể, đầy đủ tại thời điểm tổ chức đấu thầu",
      "D. Chỉ áp dụng cho đấu thầu hạn chế trong nước",
    ],
    answer:
      "C. Áp dụng cho gói thầu mua sắm hàng hóa, xây lắp, hỗn hợp có kỹ thuật, công nghệ mới, phức tạp, có tính đặc thù mà chưa xác định được chính xác các yêu cầu kỹ thuật cụ thể, đầy đủ tại thời điểm tổ chức đấu thầu",
  },
  {
    question:
      "Loại hợp đồng nào phù hợp nhất khi phạm vi công việc, yêu cầu kỹ thuật, thời gian thực hiện gói thầu đã xác định rõ.",
    options: [
      "A. Hợp đồng trọn gói",
      "B. Hợp đồng theo đơn giá cố định",
      "C. Hợp đồng theo chi phí cộng phí",
      "D. Hợp đồng theo thời gian",
    ],
    answer: "A. Hợp đồng trọn gói",
  },
  {
    question:
      "Trường hợp có nghi ngờ về tính xác thực của các tài liệu do nhà thầu cung cấp, Chủ đầu tư được làm gì?",
    options: [
      "A. Yêu cầu nhà thầu là rõ tại bước hoàn thiện hợp đồng",
      "B. Loại bỏ nhà thầu",
      "C. Xác minh với các tổ chức, cá nhân có liên quan đến nội dung của tài liệu",
      "D. Chấp nhận và tiếp tục đánh giá theo HSDT đã nộp",
    ],
    answer:
      "C. Xác minh với các tổ chức, cá nhân có liên quan đến nội dung của tài liệu",
  },
  {
    question:
      " 70.Trường hợp Chủ đầu tư giao cho Tổ chuyên gia thực hiện việc đánh giá hồ sơ dự thầu, chi phí đánh giá hồ sơ dự thầu bằng bao nhiêu phần trăm giá gói thầu?",
    options: ["A. 0,1%", "B. 0,2%", "C. 0,3%", "D. 0,5%"],
    answer: "B. 0,2%",
  },
  {
    question:
      "1. Trường hợp gói thầu sử dụng vốn chi thường xuyên có thời gian thực hiện hợp đồng dài hơn 01 năm thì:",
    options: [
      "A. Không cần xác định dự toán mua sắm các năm tiếp theo",
      "B. Chỉ xác định dự toán năm đầu tiên",
      "C. Phải nêu rõ dự toán mua sắm của từng năm",
      "D. Tất cả các đáp án trên đều sai",
    ],
    answer: "C. Phải nêu rõ dự toán mua sắm của từng năm",
  },
  {
    question: "2. Việc phân chia gói thầu căn cứ vào:",
    options: [
      "A. Quy mô, tính chất các công việc",
      "B. Tiến độ thực hiện dự án",
      "C. Kết quả phân tích, tham vấn thị trường",
      "D. Tất cả các đáp án trên",
    ],
    answer: "D. Tất cả các đáp án trên",
  },
  {
    question:
      "3. Ưu đãi đối với hàng hóa có xuất xứ Việt Nam có tỷ lệ chi phí sản xuất trong nước dưới 50% và không có hàng hóa nào có chi phí sản xuất trong nước từ 50% trở lên được xác định như thế nào khi áp dụng phương pháp giá thấp nhất?",
    options: [
      "A. Hàng hóa không thuộc đối tượng được hưởng ưu đãi phải cộng thêm một khoản tiền bằng 10% giá dự thầu...",
      "B. Hàng hóa không thuộc đối tượng được hưởng ưu đãi phải cộng thêm một khoản tiền bằng 7,5% giá dự thầu...",
      "C. Hàng hóa không thuộc đối tượng được hưởng ưu đãi phải cộng thêm một khoản tiền bằng 5% giá dự thầu...",
      "D. Không cộng thêm gì",
    ],
    answer:
      "B. Hàng hóa không thuộc đối tượng được hưởng ưu đãi phải cộng thêm một khoản tiền bằng 7,5% giá dự thầu...",
  },
  {
    question: "4. Hành vi nào sau đây bị cấm trong hoạt động đấu thầu?",
    options: [
      "A. Đưa, nhận, môi giới hối lộ",
      "B. Gian lận, thông thầu",
      "C. Cản trở hoạt động đấu thầu",
      "D. Tất cả các đáp án trên",
    ],
    answer: "D. Tất cả các đáp án trên",
  },
  {
    question: "5. Đấu thầu hạn chế được áp dụng khi nào?",
    options: [
      "A. Khi gói thầu có giá trị trên 100 tỷ đồng",
      "B. Khi nhà tài trợ yêu cầu tổ chức đấu thầu quốc tế",
      "C. Gói thầu có yêu cầu đặc thù về kỹ thuật mà chỉ có một số nhà thầu đáp ứng yêu cầu của gói thầu",
      "D. Khi chủ đầu tư muốn rút ngắn thời gian đấu thầu",
    ],
    answer:
      "C. Gói thầu có yêu cầu đặc thù về kỹ thuật mà chỉ có một số nhà thầu đáp ứng yêu cầu của gói thầu",
  },
  {
    question:
      "6. Gói thầu mua sắm máy tính để bàn để làm việc có giá gói thầu 200 triệu, có thể áp dụng các hình thức lựa chọn nhà thầu nào sau đây?",
    options: [
      "A. Đấu thầu rộng rãi",
      "B. Chỉ định thầu",
      "C. Chào hàng cạnh tranh",
      "D. Tất cả các đáp án trên",
    ],
    answer: "D. Tất cả các đáp án trên",
  },
  {
    question: "7. Đàm phán giá được áp dụng cho trường hợp nào?",
    options: [
      "A. Mua biệt dược gốc, sinh phẩm tham chiếu",
      "B. Gói thầu xây lắp có giá trên 100 tỷ đồng",
      "C. Dự án sử dụng vốn vay nước ngoài",
      "D. Tất cả các gói thầu thuộc ngành y tế",
    ],
    answer: "A. Mua biệt dược gốc, sinh phẩm tham chiếu",
  },
  {
    question:
      "8. Doanh nghiệp nhà nước A là tập đoàn kinh tế nhà nước hiện đang tổ chức 01 gói thầu hỗn hợp PC (xây lắp và cung cấp, lắp đặt thiết bị). Tình huống: công ty xây lắp X là doanh nghiệp do Tập đoàn A thành lập và nắm giữ 70 % vốn điều lệ tham dự gói thầu nêu trên. Việc đánh giá tiêu chí đảm bảo cạnh tranh trong đấu thầu như thế nào?",
    options: [
      "A. Công ty X đáp ứng yêu cầu về đảm bảo cạnh tranh trong đấu thầu.",
      "B. Công ty X không đáp ứng yêu cầu về đảm bảo cạnh tranh trong đấu thầu.",
      "C. Nếu công ty X đáp ứng các yêu cầu về bảo đảm cạnh tranh với các đơn vị tư vấn của gói thầu thì Công ty X được phép tham dự thầu",
      "D. Công ty X luôn được phép tham dự thầu và luôn được đánh giá đảm bảo cạnh tranh trong đấu thầu.",
    ],
    answer:
      "C. Nếu công ty X đáp ứng các yêu cầu về bảo đảm cạnh tranh với các đơn vị tư vấn của gói thầu thì Công ty X được phép tham dự thầu",
  },
  {
    question:
      "9. Chủ đầu tư phải công khai kết quả thực hiện hợp đồng của nhà thầu trên:",
    options: [
      "A. Trang thông tin của chủ đầu tư",
      "B. Trang thông tin của Bộ Xây dựng",
      "C. Hệ thống mạng đấu thầu quốc gia",
      "D. Tất cả các phương án trên",
    ],
    answer: "C. Hệ thống mạng đấu thầu quốc gia",
  },
  {
    question:
      "10. Tỷ lệ cổ phần, vốn góp giữa các bên trong liên danh được xác định tại thời điểm nào?",
    options: [
      "A. Sau khi mở thầu",
      "B. Khi ký hợp đồng",
      "C. Trước thời điểm đóng thầu",
      "D. Khi phê duyệt kết quả lựa chọn nhà thầu",
    ],
    answer: "C. Trước thời điểm đóng thầu",
  },
  {
    question:
      "11. Đình chỉ cuộc thầu, không công nhận kết quả lựa chọn nhà thầu được áp dụng trong trường hợp nào dưới đây?",
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
    question: "12. Thành viên tổ chuyên gia phải đáp ứng yêu cầu:",
    options: [
      "A. Tốt nghiệp đại học trở lên",
      "B. Có chứng chỉ nghiệp vụ chuyên môn về đấu thầu",
      "C. Có tối thiểu 03 năm công tác trong lĩnh vực liên quan",
      "D. Tất cả các đáp án trên",
    ],
    answer: "D. Tất cả các đáp án trên",
  },
  {
    question: "13. Điều kiện để áp dụng mua sắm trực tiếp là gì?",
    options: [
      "A. Nhà thầu đã trúng thầu qua đấu thầu rộng rãi hoặc hạn chế và thời gian từ khi ký hợp đồng trước đó đến ngày phê duyệt kết quả MSTT không quá 12 tháng",
      "B. Khối lượng mua sắm không vượt 130% so với hợp đồng trước đó",
      "C. Đơn giá không vượt đơn giá của phần việc tương tự thuộc hợp đồng trước đó",
      "D. Tất cả các đáp án trên",
    ],
    answer: "D. Tất cả các đáp án trên",
  },
  {
    question:
      "14. Đối với phương thức một giai đoạn hai túi hồ sơ việc mở thầu được tiến hành bao nhiêu lần?",
    options: ["A. 4 lần", "B. 3 lần", "C. 2 lần", "D. 1 lần"],
    answer: "C 2 lần",
  },
  {
    question:
      "15. Nhà thầu tham dự gói thầu EPC được tổ chức đấu thầu rộng rãi phải độc lập về pháp lý và tài chính với bên nào sau đây?",
    options: [
      "A. Nhà thầu cung cấp vật tư cho gói thầu",
      "B. Nhà thầu khác cùng tham dự thầu",
      "C. Nhà thầu lập, thẩm tra thiết kế FEED",
      "D. Nhà thầu phụ",
    ],
    answer: "C. Nhà thầu lập, thẩm tra thiết kế FEED",
  },
  {
    question:
      "16. Đối tượng nào được tham gia thực hiện gói thầu theo hình thức tham gia thực hiện của cộng đồng?",
    options: [
      "A. Cộng đồng dân cư, tổ, nhóm thợ đủ năng lực tại địa phương nơi có gói thầu được giao thực hiện",
      "B. Doanh nghiệp nhà nước đóng trên địa bàn",
      "C. Tổ chức phi chính phủ nước ngoài",
      "D. Cá nhân có chứng chỉ hành nghề xây dựng",
    ],
    answer:
      "A. Cộng đồng dân cư, tổ, nhóm thợ đủ năng lực tại địa phương nơi có gói thầu được giao thực hiện",
  },
  {
    question:
      "17. Hình thức tự thực hiện yêu cầu chủ đầu tư phải đáp ứng điều kiện gì?",
    options: [
      "A. Có ít nhất 5 năm kinh nghiệm trong lĩnh vực liên quan",
      "B. Có năng lực kỹ thuật, tài chính và kinh nghiệm đáp ứng yêu cầu của gói thầu và có phương án khả thi huy động nhân sự, máy móc, thiết bị đáp ứng yêu cầu về tiến độ thực hiện gói thầu",
      "C. Được cơ quan cấp trên trực tiếp phê duyệt",
      "D. Chỉ áp dụng cho gói thầu dưới 10 tỷ đồng",
    ],
    answer:
      "B. Có năng lực kỹ thuật, tài chính và kinh nghiệm đáp ứng yêu cầu của gói thầu và có phương án khả thi huy động nhân sự, máy móc, thiết bị đáp ứng yêu cầu về tiến độ thực hiện gói thầu",
  },
  {
    question:
      "18. Hồ sơ đề xuất về tài chính của nhà thầu không vượt qua bước đánh giá về kỹ thuật sẽ được xử lý như thế nào?",
    options: [
      "A. Hủy bỏ ngay sau khi có Quyết định phê duyệt danh sách nhà thầu đạt kỹ thuật",
      "B. Được trả lại nguyên trạng cho nhà thầu theo thời hạn quy định",
      "C. Lưu trữ vĩnh viễn tại Chủ đầu tư",
      "D. Công khai trên Hệ thống mạng đấu thầu quốc gia",
    ],
    answer: "B. Được trả lại nguyên trạng cho nhà thầu theo thời hạn quy định",
  },
  {
    question:
      "19. Khi có bằng chứng tổ chức, cá nhân tham gia hoạt động đấu thầu có hành vi quy định tại Điều 16 của Luật Đấu thầu này hoặc hành vi vi phạm quy định của pháp luật có liên quan dẫn đến không bảo đảm cạnh tranh, công bằng, minh bạch và hiệu quả kinh tế hoặc làm sai lệch kết quả lựa chọn nhà thầu người có thẩm quyền thực hiện biện pháp nào sau đây?",
    options: [
      "A. Đình chỉ cuộc thầu",
      "B. Không công nhận kết quả lựa chọn nhà thầu",
      "C. Xử lý vi phạm trong đấu thầu",
      "D. Tất cả các đáp án trên",
    ],
    answer: "D. Tất cả các đáp án trên",
  },
  {
    question:
      "20. Trường hợp, nhà thầu thuộc diện được hưởng nhiều loại ưu đãi, việc tính ưu đãi được thực hiện như thế nào?",
    options: [
      "A. Cộng gộp tất cả các ưu đãi",
      "B. Chỉ được hưởng một loại ưu đãi có lợi nhất cho nhà thầu",
      "C. Xin ý kiến của Người có thẩm quyền",
      "D. Tùy thuộc vào quyết định của chủ đầu tư",
    ],
    answer: "B. Chỉ được hưởng một loại ưu đãi có lợi nhất cho nhà thầu",
  },
  {
    question:
      "21. Điều kiện nào sau đây KHÔNG phải là điều kiện về tư cách hợp lệ của nhà thầu là tổ chức?",
    options: [
      "A. Có đăng ký thành lập, hoạt động theo pháp luật Việt Nam hoặc nước ngoài",
      "B. Hạch toán tài chính độc lập",
      "C. Không đang trong quá trình giải thể hoặc bị thu hồi giấy chứng nhận đăng ký doanh nghiệp",
      "D. Có năng lực và kinh nghiệm để thực hiện gói thầu",
    ],
    answer: "D. Có năng lực và kinh nghiệm để thực hiện gói thầu",
  },
  {
    question:
      "22. Chi phí lập hoặc thẩm định kế hoạch tổng thể lựa chọn nhà thầu được tính bằng bao nhiêu phần trăm chi phí lập báo cáo nghiên cứu khả thi?",
    options: ["A. 0,1%", "B. 1%", "C. 0,5%", "D. 2%"],
    answer: "C 0,5%",
  },
  {
    question:
      "23. Kế hoạch tổng thể lựa chọn nhà thầu cho dự án phải bao gồm nội dung nào sau đây?",
    options: [
      "A. Đánh giá năng lực, nguồn lực và kinh nghiệm của chủ đầu tư",
      "B. Phân tích thị trường và xác định rủi ro trong đấu thầu",
      "C. Bối cảnh thực hiện dự án đối với công tác đấu thầu",
      "D. Tất cả các đáp án trên",
    ],
    answer: "D. Tất cả các đáp án trên",
  },
  {
    question:
      "24. Đối tượng nào sau đây không thuộc phạm vi áp dụng của Luật Đấu thầu?",
    options: [
      "A. Cơ quan nhà nước sử dụng vốn ngân sách nhà nước",
      "B. Doanh nghiệp nhà nước thực hiện dự án đầu tư sử dụng vốn ngân sách nhà nước",
      "C. Doanh nghiệp do doanh nghiệp nhà nước nắm 100% vốn điều lệ thực hiện dự án đầu tư không sử dụng vốn ngân sách nhà nước",
      "D. Tổ chức chính trị - xã hội sử dụng NSNN, nguồn thu hợp pháp của tổ chức để thực hiện dự án đầu tư",
    ],
    answer:
      "C. Doanh nghiệp do doanh nghiệp nhà nước nắm 100% vốn điều lệ thực hiện dự án đầu tư không sử dụng vốn ngân sách nhà nước",
  },
  {
    question:
      "25. Trường hợp chủ đầu tư giao cho cơ quan, đơn vị trực thuộc thực hiện việc lập hồ sơ mời thầu, chi phí lập HSMT được xác định bằng bao nhiêu phần trăm giá gói thầu?",
    options: ["A. 0,05%", "B. 0,1%", "C. 0,2%", "D. 0,5%"],
    answer: "C 0,2%",
  },
  {
    question:
      "26. Chi phí nào sau đây nhà thầu phải chịu trong lựa chọn nhà thầu?",
    options: [
      "A. Chi phí đăng tải thông tin về đấu thầu",
      "B. Chi phí nộp hồ sơ dự thầu",
      "C. Chi phí thẩm định kết quả lựa chọn nhà thầu",
      "D. Chi phí thuê tư vấn đánh giá HSDT",
    ],
    answer: "B. Chi phí nộp hồ sơ dự thầu",
  },
  {
    question: "27. Chào giá trực tuyến là:",
    options: [
      "A. Việc nhà thầu gửi báo giá qua email",
      "B. Việc nhà thầu gửi báo giá qua bưu điện",
      "C. Quá trình lặp lại nhiều lần việc nhà thầu sử dụng phương tiện điện tử để đưa ra mức giá mới trên Hệ thống mạng đấu thầu quốc gia",
      "D. Việc chủ đầu tư công bố giá trên website",
    ],
    answer:
      "C. Quá trình lặp lại nhiều lần việc nhà thầu sử dụng phương tiện điện tử để đưa ra mức giá mới trên Hệ thống mạng đấu thầu quốc gia",
  },
  {
    question:
      "28. Chủ đầu tư chịu trách nhiệm đăng tải kế hoạch lựa chọn nhà thầu trên Hệ thống mạng đấu thầu quốc gia trong thời hạn bao lâu kể từ ngày văn bản được ban hành?",
    options: [
      "A. 07 ngày làm việc",
      "B. 03 ngày làm việc",
      "C. 05 ngày làm việc",
      "D. 10 ngày",
    ],
    answer: "C. 05 ngày làm việc",
  },
  {
    question: "29. Nội dung kế hoạch tổng thể lựa chọn nhà thầu KHÔNG bao gồm:",
    options: [
      "A. Phân tích bối cảnh thực hiện dự án",
      "B. Đánh giá năng lực, nguồn lực của chủ đầu tư",
      "C. Phân tích, tham vấn thị trường",
      "D. Kế hoạch bố trí vốn để thực hiện dự toán mua sắm",
    ],
    answer: "D. Kế hoạch bố trí vốn để thực hiện dự toán mua sắm",
  },
  {
    question:
      "30. Trường hợp người có chủ đầu tư cho cơ quan, đơn vị trực thuộc thực hiện việc thẩm định kết quả lựa chọn nhà thầu, chi phí thẩm định được xác định bằng bao nhiêu phần trăm giá gói thầu?",
    options: ["A. 0,05%", "B. 0,15%", "C. 0,1%", "D. 0,2%"],
    answer: "C. 0,1%",
  },
  {
    question:
      "31. Điều kiện nào sau đây KHÔNG phải là điều kiện tổ chức đấu thầu quốc tế để lựa chọn nhà thầu?",
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
      "32. Biện pháp nào sau đây KHÔNG phải là biện pháp bảo đảm dự thầu?",
    options: [
      "A. Đặt cọc",
      "B. Nộp thư bảo lãnh của tổ chức tín dụng",
      "C. Nộp giấy chứng nhận bảo hiểm bảo lãnh",
      "D. Ký hợp đồng nguyên tắc",
    ],
    answer: "D. Ký hợp đồng nguyên tắc",
  },
  {
    question: "33. Ngôn ngữ sử dụng trong đấu thầu quốc tế là gì?",
    options: [
      "A. Tiếng Việt",
      "B. Tiếng Anh hoặc tiếng Việt và tiếng Anh",
      "C. Tiếng Pháp",
      "D. Tiếng Trung",
    ],
    answer: "B. Tiếng Anh hoặc tiếng Việt và tiếng Anh",
  },
  {
    question:
      "34. Phương thức lựa chọn nhà thầu đối với gói thầu xây lắp không yêu cầu kỹ thuật cao có giá gói thầu 20 tỷ đồng là:",
    options: [
      "A. Một giai đoạn một túi hồ sơ",
      "B. Một giai đoạn hai túi hồ sơ",
      "C. Đáp án A và đáp án B đều đúng",
      "D. Do Người có thẩm quyền quyết định",
    ],
    answer: "A. Một giai đoạn một túi hồ sơ",
  },
  {
    question:
      "35. Điều kiện để lựa chọn nhà thầu trong trường hợp đặc biệt là:",
    options: [
      "A. Gói thầu thuộc dự án, dự toán mua sắm có một hoặc một số điều kiện đặc thù về quy trình, thủ tục, tiêu chí lựa chọn nhà thầu, điều kiện ký kết và thực hiện hợp đồng",
      "B. Gói thầu thuộc dự án đầu tư công",
      "C. Gói thầu đặc thù về phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số",
      "D. Đáp án A và đáp án C đều đúng",
    ],
    answer: "D. Đáp án A và đáp án C đều đúng",
  },
  {
    question:
      "36. Thông tin nào sau đây phải được đăng tải công khai trên Hệ thống mạng đấu thầu quốc gia?",
    options: [
      "A. Thông tin cá nhân nhà thầu",
      "B. Thông tin về tài sản nhà thầu",
      "C. Thông tin về nhà thầu vi phạm, không bảo đảm uy tín",
      "D. Thông tin về hợp đồng lao động của nhà thầu",
    ],
    answer: "C. Thông tin về nhà thầu vi phạm, không bảo đảm uy tín",
  },
  {
    question:
      "37. Trường hợp nào sau đây là không lý do hủy thầu đối với lựa chọn nhà thầu?",
    options: [
      "A. Tất cả hồ sơ dự thầu không đáp ứng yêu cầu",
      "B. Thay đổi về mục tiêu, phạm vi đầu tư trong quyết định đầu tư đã được phê duyệt đối với dự án hoặc thay đổi về mục tiêu, phạm vi mua sắm đối với dự toán mua sắm do sắp xếp đơn vị hành chính, tổ chức bộ máy nhà nước và các trường hợp bất khả kháng khác làm thay đổi khối lượng công việc, tiêu chuẩn đánh giá đã ghi trong hồ sơ mời quan tâm, hồ sơ mời sơ tuyển, hồ sơ mời thầu, hồ sơ yêu cầu",
      "C. Nhà thầu trúng thầu thực hiện hành vi bị cấm",
      "D. Hồ sơ mời thầu không tuân thủ quy định của Luật Đấu thầu, quy định khác của pháp luật có liên quan dẫn đến nhà thầu được lựa chọn không đáp ứng yêu cầu để thực hiện gói thầu",
    ],
    answer: "C. Nhà thầu trúng thầu thực hiện hành vi bị cấm",
  },
  {
    question:
      "38. Giá gói thầu có thể được lập căn cứ vào thông tin nào sau đây?",
    options: [
      "A. Dự toán gói thầu được duyệt",
      "B. Kết quả lựa chọn nhà thầu đối với hàng hóa, dịch vụ tương tự trong thời gian tối đa 12 tháng trước ngày trình kế hoạch lựa chọn nhà thầu",
      "C. Báo giá của hàng hóa, dịch vụ",
      "D. Tất cả các đáp án trên",
    ],
    answer: "D. Tất cả các đáp án trên",
  },
  {
    question:
      "39. Tổ chuyên gia trong lựa chọn nhà thầu được thành lập như thế nào?",
    options: [
      "A. Chủ đầu tư quyết định thành lập tổ chuyên gia đáp ứng quy định trong trường hợp không thuê đơn vị tư vấn lập hồ sơ mời thầu; đánh giá hồ sơ dự thầu",
      "B. Người có thẩm quyền quyết định thành lập tổ chuyên gia đáp ứng quy định trong trường hợp không thuê đơn vị tư vấn lập hồ sơ mời thầu; đánh giá hồ sơ dự thầu",
      "C. Đơn vị tư vấn quyết định thành lập tổ chuyên gia đáp ứng quy định trong trường hợp thuê đơn vị tư vấn lập hồ sơ mời thầu; đánh giá hồ sơ dự thầu",
      "D. A và C đều đúng",
    ],
    answer: "D. A và C đều đúng",
  },
  {
    question:
      "40. Chào hàng cạnh tranh không áp dụng cho gói thầu thuộc lĩnh vực nào?",
    options: [
      "A. Tư vấn",
      "B. Phi tư vấn đơn giản",
      "C. Mua sắm hàng hóa thông dụng",
      "D. Xây lắp đơn giản",
    ],
    answer: "A. Tư vấn",
  },
  {
    question:
      "41. Cơ sở dữ liệu quốc gia về nhà thầu bao gồm thông tin nào sau đây?",
    options: [
      "A. Thông tin về tên địa chỉ của nhà thầu thông tin về thực trạng pháp lý",
      "B. Thông tin về số lượng lao động của nhà thầu",
      "C. Thông tin về năng lực, kinh nghiệm của nhà thầu",
      "D. Thông tin về số lượng hợp đồng mà nhà thầu đã ký",
    ],
    answer: "C. Thông tin về năng lực, kinh nghiệm của nhà thầu",
  },
  {
    question:
      "42. Trường hợp áp dụng phương pháp kết hợp giữa kỹ thuật và giá, công thức tính điểm ưu đãi đối với hàng hóa có xuất xứ Việt Nam có tỷ lệ chi phí sản xuất trong nước dưới 50% và không có hàng hóa nào có chi phí sản xuất trong nước từ 50% trở lên là:",
    options: [
      "A. 5% x (giá hàng hóa ưu đãi/giá dự thầu sau sửa lỗi, hiệu chỉnh sai lệch trừ giá trị giảm giá (nếu có)) x điểm tổng hợp",
      "B. 10% x (giá hàng hóa ưu đãi/giá dự thầu sau sửa lỗi, hiệu chỉnh sai lệch trừ giá trị giảm giá (nếu có)) x điểm tổng hợp",
      "C. 7,5% x (giá hàng hóa ưu đãi/giá dự thầu sau sửa lỗi, hiệu chỉnh sai lệch trừ giá trị giảm giá (nếu có)) x điểm tổng hợp",
      "D. 15% x (giá hàng hóa ưu đãi/giá dự thầu sau sửa lỗi, hiệu chỉnh sai lệch trừ giá trị giảm giá (nếu có)) x điểm tổng hợp",
    ],
    answer:
      "C. 7,5% x (giá hàng hóa ưu đãi/giá dự thầu sau sửa lỗi, hiệu chỉnh sai lệch trừ giá trị giảm giá (nếu có)) x điểm tổng hợp",
  },
  {
    question:
      "43. Lựa chọn nhà thầu trong trường hợp đặc biệt áp dụng khi nào?",
    options: [
      "A. Đối với gói thầu thuộc dự án, dự toán mua sắm có một hoặc một số điều kiện đặc thù về quy trình, thủ tục, tiêu chí lựa chọn nhà thầu, điều kiện ký kết và thực hiện hợp đồng",
      "B. Khi gói thầu có giá trị dưới 10 tỷ đồng",
      "C. Khi chủ đầu tư là doanh nghiệp nhà nước",
      "D. Khi có sự đồng ý bằng văn bản của thủ tướng chính phủ",
    ],
    answer:
      "A. Đối với gói thầu thuộc dự án, dự toán mua sắm có một hoặc một số điều kiện đặc thù về quy trình, thủ tục, tiêu chí lựa chọn nhà thầu, điều kiện ký kết và thực hiện hợp đồng",
  },
  {
    question:
      "44. Giá gói thầu được cập nhật trong thời hạn bao nhiêu ngày trước ngày mở thầu nếu cần thiết?",
    options: ["A. 7 ngày", "B. 14 ngày", "C. 28 ngày", "D. 30 ngày"],
    answer: "C. 28 ngày",
  },
  {
    question:
      "45. Phương thức một giai đoạn một túi hồ sơ KHÔNG áp dụng cho trường hợp nào?",
    options: [
      "A. Gói thầu mua sắm hàng hóa được tổ chức đấu thầu rộng rãi",
      "B. Gói thầu phi tư vấn được tổ chức theo hình thức chào hàng cạnh tranh",
      "C. Gói thầu tư vấn được tổ chức đấu thầu rộng rãi",
      "D. Gói thầu xây lắp áp dụng hình thức chỉ định thầu theo quy trình thông thường",
    ],
    answer: "C. Gói thầu tư vấn được tổ chức đấu thầu rộng rãi",
  },
  {
    question:
      "46. Ai chịu trách nhiệm đăng tải thông tin về năng lực, kinh nghiệm của nhà thầu trên Hệ thống mạng đấu thầu quốc gia?",
    options: [
      "A. Chủ đầu tư",
      "B. Người có thẩm quyền",
      "C. Nhà thầu",
      "D. Trung tâm đấu thầu qua mạng Quốc gia",
    ],
    answer: "C. Nhà thầu",
  },
  {
    question:
      "47. Cơ quan nhà nước X tổ chức đấu thầu 01 gói thầu mua sắm hàng hóa có nguồn vốn do 01 tổ chức trong nước tài trợ. Việc tổ chức mua sắm hàng hóa nêu trên có phải tuân thủ theo Luật Đấu thầu?",
    options: [
      "A. Bắt buộc phải tuân thủ hoàn toàn theo Luật Đấu thầu trong mọi trường hợp",
      "B. Chủ đầu tư được quyền lựa chọn theo Luật Đấu thầu hoặc không theo Luật Đấu thầu",
      "C. Người có thẩm quyền được quyền lựa chọn theo Luât Đấu thầu hoặc không theo Luật Đấu thầu",
      "D. Trường hợp tổ chức tài trợ vốn yêu cầu không phải thực hiện theo Luật Đấu thầu thì việc tổ chức lựa chọn nhà thầu do cơ quan tự quyết định",
    ],
    answer:
      "D. Trường hợp tổ chức tài trợ vốn yêu cầu không phải thực hiện theo Luật Đấu thầu thì việc tổ chức lựa chọn nhà thầu do cơ quan tự quyết định",
  },
  {
    question:
      "48. Sau khi có quyết định phê duyệt kết quả lựa chọn nhà thầu, chủ đầu tư phải đăng tải thông tin về kết quả lựa chọn nhà thầu trong thời hạn bao lâu?",
    options: [
      "A. 01 ngày làm việc",
      "B. 03 ngày làm việc",
      "C. 05 ngày làm việc",
      "D. 10 ngày",
    ],
    answer: "C. 05 ngày làm việc",
  },
  {
    question:
      "49. Trường hợp không lập kế hoạch tổng thể lựa chọn nhà thầu, chủ đầu tư có thể tiến hành phân tích, tham vấn thị trường để:",
    options: [
      "A. Lập kế hoạch lựa chọn nhà thầu",
      "B. Lập hồ sơ mời thầu",
      "C. Lập hồ sơ yêu cầu",
      "D. Tất cả các đáp án trên",
    ],
    answer: "D. Tất cả các đáp án trên",
  },
  {
    question: "50. Thông tin về vi phạm của nhà thầu được cập nhật vào:",
    options: [
      "A. Cổng dịch vụ công Quốc gia",
      "B. Cơ sở dữ liệu quốc gia về nhà thầu trên Hệ thống mạng đấu thầu quốc gia",
      "C. Trang thông tin của chủ đầu tư",
      "D. Trang thông tin của Bộ Tài chính",
    ],
    answer:
      "B. Cơ sở dữ liệu quốc gia về nhà thầu trên Hệ thống mạng đấu thầu quốc gia",
  },
  {
    question:
      "51. Giá gói thầu được tính đúng, đủ toàn bộ chi phí để thực hiện gói thầu, bao gồm:",
    options: [
      "A. Chi phí dự phòng",
      "B. Phí, lệ phí và thuế",
      "C. Chi phí phát sinh khối lượng",
      "D. Tất cả các đáp án trên",
    ],
    answer: "D. Tất cả các đáp án trên",
  },
  {
    question:
      "52. Nhà thầu tham dự thầu phải bảo đảm cạnh tranh trong đấu thầu với:",
    options: [
      "A. Chủ đầu tư",
      "B. Nhà thầu tư vấn lập HSMT cho gói thầu đó",
      "C. Nhà thầu tư vấn thẩm định KQLCNT cho gói thầu đó",
      "D. Tất cả các đáp án trên",
    ],
    answer: "D. Tất cả các đáp án trên",
  },
  {
    question:
      "53. Trường hợp áp dụng phương pháp kết hợp giữa kỹ thuật và giá, công thức tính điểm ưu đãi đối với hàng hóa có xuất xứ Việt Nam có tỷ lệ chi phí sản xuất trong nước dưới 50% và không có hàng hóa nào có chi phí sản xuất trong nước từ 50% trở lên là:",
    options: [
      "A. 5% x (giá hàng hóa ưu đãi/giá dự thầu sau sửa lỗi, hiệu chỉnh sai lệch trừ giá trị giảm giá (nếu có)) x điểm tổng hợp",
      "B. 10% x (giá hàng hóa ưu đãi/giá dự thầu sau sửa lỗi, hiệu chỉnh sai lệch trừ giá trị giảm giá (nếu có)) x điểm tổng hợp",
      "C. 7,5% x (giá hàng hóa ưu đãi/giá dự thầu sau sửa lỗi, hiệu chỉnh sai lệch trừ giá trị giảm giá (nếu có)) x điểm tổng hợp",
      "D. 15% x (giá hàng hóa ưu đãi/giá dự thầu sau sửa lỗi, hiệu chỉnh sai lệch trừ giá trị giảm giá (nếu có)) x điểm tổng hợp",
    ],
    answer:
      "D. 15% x (giá hàng hóa ưu đãi/giá dự thầu sau sửa lỗi, hiệu chỉnh sai lệch trừ giá trị giảm giá (nếu có)) x điểm tổng hợp",
  },
  {
    question:
      "54. Trường hợp nào sau đây KHÔNG thuộc điều kiện áp dụng chỉ định thầu?",
    options: [
      "A. Có yêu cầu cấp bách, khẩn cấp nhằm thực hiện nhiệm vụ quốc phòng, an ninh, đối ngoại, bảo vệ chủ quyền quốc gia; ngăn chặn hoặc xử lý hậu quả do sự kiện bất khả kháng, bảo vệ tài sản, sức khỏe, tính mạng của người dân; phòng, chống dịch bệnh",
      "B. Có yêu cầu về bảo vệ bí mật nhà nước",
      "C. Có yêu cầu, điều kiện đặc thù về chuyên môn, nghiệp vụ, kỹ thuật; nghiên cứu, thử nghiệm, quyền tác giả, bản quyền, bảo hành hoặc cần bảo đảm tính tương thích về công nghệ, bản quyền, quy hoạch",
      "D. Có duy nhất một hãng sản xuất",
    ],
    answer: "D. Có duy nhất một hãng sản xuất",
  },
  {
    question:
      "55. Đối với gói thầu áp dụng hình thức đấu thầu rộng rãi, nhà thầu tham dự thầu gói thầu xây lắp phải độc lập về pháp lý và tài chính với bên nào sau đây?",
    options: [
      "A. Nhà thầu phụ cùng tham dự thầu gói thầu đó",
      "B. Nhà thầu khác cùng tham dự thầu",
      "C. Chủ đầu tư",
      "D. Nhà cung cấp vật tư",
    ],
    answer: "C. Chủ đầu tư",
  },
  {
    question:
      "56. Một nhà thầu trúng thầu nhưng không đến hoàn thiện hợp đồng. Nhà thầu sẽ:",
    options: [
      "A. Được hoàn trả giá trị bảo đảm dự thầu",
      "B. Không được hoàn trả giá trị bảo đảm dự thầu tại điểm đ, khoản 9, Điều 14 Luật đấu thầu 2023",
      "C. Được tiếp tục mời đến ký hợp đồng",
      "D. Không bị xử lý gì",
    ],
    answer:
      "B. Không được hoàn trả giá trị bảo đảm dự thầu tại điểm đ, khoản 9, Điều 14 Luật đấu thầu 2023",
  },
  {
    question:
      "57. Đối tượng nào sau đây được hưởng ưu đãi trong lựa chọn nhà thầu?",
    options: [
      "A. Hàng hóa có xuất xứ Việt Nam",
      "B. Nhà thầu là doanh nghiệp nhỏ, siêu nhỏ",
      "C. Nhà thầu là doanh nghiệp khoa học và công nghệ",
      "D. Tất cả các đáp án trên",
    ],
    answer: "D. Tất cả các đáp án trên",
  },
  {
    question:
      "58. Trường hợp tất cả các nhà thầu tham dự thầu đều được hưởng ưu đãi như nhau thì:",
    options: [
      "A. Không cần tính ưu đãi để so sánh, xếp hạng",
      "B. Vẫn phải cộng ưu đãi vào giá dự thầu",
      "C. Chỉ tính ưu đãi cho nhà thầu có giá thấp nhất",
      "D. Chỉ tính ưu đãi cho nhà thầu trong nước",
    ],
    answer: "A. Không cần tính ưu đãi để so sánh, xếp hạng",
  },
  {
    question:
      "59. Đối với đấu thầu trong nước, nhà thầu được chào thầu bằng loại tiền nào?",
    options: [
      "A. Đô la Mỹ (USD)",
      "B. Euro (EUR)",
      "C. Đồng Việt Nam (VND)",
      "D. Nhân dân tệ (CNY)",
    ],
    answer: "C. Đồng Việt Nam (VND)",
  },
  {
    question:
      "60. Thẩm quyền phê duyệt kế hoạch lựa chọn nhà thầu đối với dự án đã có kế hoạch tổng thể lựa chọn nhà thầu?",
    options: [
      "A. Chủ đầu tư",
      "B. Người có thẩm quyền",
      "C. Cơ quan quản lý nhà nước về đấu thầu",
      "D. Chủ đầu tư nếu được người có thẩm quyền ủy quyền",
    ],
    answer: "A. Chủ đầu tư",
  },
  {
    question:
      "6. Yêu cầu về nhãn hiệu, xuất xứ của hàng hóa trong hồ sơ mời thầu được nêu như thế nào là phù hợp?",
    options: [
      "A. Chủ đầu tư được phép yêu cầu cụ thể nhãn hiệu, xuất xứ của hàng hóa trong hồ sơ mời thầu trong mọi trường hợp (sai không được yêu cầu nhãn hiệu xuất xứ)",
      "B. Chủ đầu tư được phép yêu cầu cụ thể nhãn hiệu, xuất xứ của hàng hóa trong hồ sơ mời thầu trường hợp hàng hóa đặc thù, phức tạp cần gắn với trách nhiệm của nhà sản xuất",
      "C. Được nêu xuất xứ theo nhóm nước, vùng lãnh thổ",
      "D. Không được nêu yêu cầu về nhãn hiệu, xuất xứ của hàng hóa trong hồ sơ mời thầu",
    ],
    answer: "C. Được nêu xuất xứ theo nhóm nước, vùng lãnh thổ",
  },
  {
    question:
      "5. Hành vi không hoàn thiện hoặc từ chối ký kết hợp đồng sau khi trúng thầu của nhà thầu dẫn đến hậu quả nào?",
    options: [
      "A. Bị cấm tham gia hoạt động đấu thầu trong 6 tháng",
      "B. Bị đánh giá về uy tín trong đấu thầu",
      "C. Bị tịch thu bảo đảm thực hiện hợp đồng",
      "D. Bị khóa tài khoản tham gia Hệ thống mạng đấu thầu quốc gia 12 tháng",
    ],
    answer: "B. Bị đánh giá về uy tín trong đấu thầu",
  },
  {
    question:
      "6. Đối với đấu thầu không qua mạng việc đánh giá hồ sơ dự thầu được thực hiện trên:",
    options: [
      "A. Bản gốc",
      "B. Bản chụp",
      "C. Bản chụp, trường hợp có sự sai khác giữa bản chụp và bản gốc thì căn cứ bản gốc",
      "D. Đồng thời bản gốc và bản chụp",
    ],
    answer:
      "C. Bản chụp, trường hợp có sự sai khác giữa bản chụp và bản gốc thì căn cứ bản gốc",
  },
  {
    question:
      "7. Phương thức một giai đoạn hai túi hồ sơ được áp dụng trong trường hợp nào sau đây?",
    options: [
      "A. Gói thầu dịch vụ tư vấn áp dụng hình thức đấu thầu rộng rãi",
      "B. Gói thầu xây lắp áp dụng hình thức chào hàng cạnh tranh",
      "C. Gói thầu phi tư vấn áp dụng hình thức chỉ định thầu theo quy trình thông thường",
      "D. Gói thầu mua sắm hàng hóa áp dụng hình thức mua sắm trực tiếp",
    ],
    answer: "A. Gói thầu dịch vụ tư vấn áp dụng hình thức đấu thầu rộng rãi",
  },
  {
    question: "8. Việc đánh giá hồ sơ dự thầu phải căn cứ vào:",
    options: [
      "A. Tiêu chuẩn đánh giá hồ sơ dự thầu",
      "B. Yêu cầu khác trong hồ sơ mời thầu",
      "C. Hồ sơ dự thầu đã nộp",
      "D. Tất cả các đáp án trên",
    ],
    answer: "D. Tất cả các đáp án trên",
  },
  {
    question:
      "9. Gói thầu mua sắm hàng hóa, trường hợp hợp đồng tương tự mà nhà thầu đề xuất không đáp ứng yêu cầu, tổ chuyên gia xử lý như thế nào?",
    options: [
      "A. Loại bỏ hồ sơ dự thầu của nhà thầu",
      "B. Không thực hiện làm rõ, không cho phép bổ sung, thay thế hợp đồng tương tự khác",
      "C. Có văn bản gửi Chủ đầu tư để đề nghị nhà thầu làm rõ hồ sơ dự thầu, cho phép bổ sung, thay thế hợp đồng tương tự khác để đánh giá",
      "D. Cho phép bổ sung, thay thế 01 lần hợp đồng tương tự khác để đánh giá",
    ],
    answer:
      "C. Có văn bản gửi Chủ đầu tư để đề nghị nhà thầu làm rõ hồ sơ dự thầu, cho phép bổ sung, thay thế hợp đồng tương tự khác để đánh giá",
  },
  {
    question:
      "10. Đối với gói thầu cung cấp dịch vụ tư vấn, phương pháp đánh giá nào KHÔNG được áp dụng?",
    options: [
      "A. Giá thấp nhất",
      "B. Giá cố định",
      "C. Kết hợp giữa kỹ thuật và giá",
      "D. Giá đánh giá",
    ],
    answer: "D. Giá đánh giá",
  },
  {
    question:
      "11. Trường hợp nào dưới đây sẽ bị coi là không hợp lệ về bảo đảm dự thầu?",
    options: [
      "A. Giá trị bảo đảm dự thầu vượt yêu cầu trong hồ sơ mời thầu",
      "B. Thời hạn hiệu lực của bảo đảm dự thầu ngắn hơn so với yêu cầu",
      "C. Bảo đảm dự thầu được phát hành bởi ngân hàng thương mại",
      "D. Tên đơn vị thụ hưởng là tên của chủ đầu tư",
    ],
    answer: "B. Thời hạn hiệu lực của bảo đảm dự thầu ngắn hơn so với yêu cầu",
  },
  {
    question:
      "12. Thời gian thực hiện thẩm định kết quả lựa chọn nhà thầu phải bảo đảm?",
    options: [
      "A. Tối đa không quá 05 ngày làm việc",
      "B. Tối đa không quá 10 ngày",
      "C. Tối đa không quá 15 ngày",
      "D. Không có quy định cụ thể",
    ],

    answer: "D. Không có quy định cụ thể",
  },
  {
    question:
      "13. Danh sách ngắn được đăng tải trên Hệ thống mạng đấu thầu quốc gia chậm nhất bao nhiêu ngày kể từ ngày phê duyệt?",
    options: [
      "A. 01 ngày làm việc",
      "B. 03 ngày làm việc",
      "C. 05 ngày làm việc",
      "D. 07 ngày làm việc",
    ],
    answer: "C. 05 ngày làm việc",
  },
  {
    question:
      "14. Trường hợp thuốc, thiết bị y tế, vật tư xét nghiệm thuộc danh mục mua sắm tập trung đã được phê duyệt trong kế hoạch lựa chọn nhà thầu nhưng chưa có kết quả lựa chọn nhà thầu, hoặc không lựa chọn được nhà thầu trúng thầu, hoặc thỏa thuận khung đã hết hiệu lực, thì cơ sở khám bệnh, chữa bệnh được phép mua sắm theo thông báo của đơn vị được giao nhiệm vụ mua sắm tập trung để đáp ứng nhu cầu sử dụng nhưng tối đa trong thời gian bao lâu?",
    options: [
      "A. Không quá 6 tháng",
      "B. Không quá 9 tháng",
      "C. Không quá 12 tháng",
      "D. Không quá 18 tháng",
    ],
    answer: "C. Không quá 12 tháng",
  },
  {
    question:
      "16. Đối với đấu thầu không qua mạng, trường hợp trong hồ sơ đề xuất về tài chính, nhà thầu không chào giá cho một hoặc nhiều hạng mục công việc đã nêu trong hồ sơ đề xuất về kỹ thuật theo yêu cầu của hồ sơ mời thầu thì:",
    options: [
      "A. Nhà thầu bị loại do hồ sơ đề xuất tài chính không đầy đủ",
      "B. Nhà thầu được coi là đã chào giá cho các hạng mục công việc này và phân bổ chi phí vào các phần công việc khác của gói thầu",
      "C. Nhà thầu được yêu cầu bổ sung giá chào cho các hạng mục công việc còn thiếu sau khi mở thầu",
      "D. Chủ đầu tư sẽ tự tính giá trị chào giá của các hạng mục công việc còn thiếu dựa trên dự toán gói thầu",
    ],
    answer:
      "B. Nhà thầu được coi là đã chào giá cho các hạng mục công việc này và phân bổ chi phí vào các phần công việc khác của gói thầu",
  },
  {
    question:
      "17. Trong gói thầu dịch vụ tư vấn, thông tin về uy tín của nhà thầu được sử dụng để:",
    options: [
      "A. Đánh giá về năng lực, kinh nghiệm",
      "B. Đánh giá tư cách hợp lệ của nhà thầu",
      "C. Đánh giá về kỹ thuật",
      "D. Loại nhà thầu vì không đảm bảo uy tín khi tham gia đấu thầu",
    ],
    answer: "C. Đánh giá về kỹ thuật",
  },
  {
    question:
      "18. Đối với đấu thầu không qua mạng, biên bản mở thầu phải được đăng tải trên Hệ thống mạng đấu thầu quốc gia trong thời hạn bao lâu kể từ thời điểm mở thầu?",
    options: ["A. 12 giờ", "B. 18 giờ", "C. 24 giờ", "D. 48 giờ"],
    answer: "A. 12 giờ",
  },
  {
    question:
      "19. Nội dung nào sau đây KHÔNG thuộc yêu cầu trong hồ sơ mời thầu lựa chọn nhà thầu theo số lượng dịch vụ kỹ thuật?",
    options: [
      "A. Yêu cầu đối với nhà thầu về việc lưu kho, lưu trữ hóa chất, vật tư xét nghiệm để đảm bảo dịch vụ kỹ thuật được thực hiện liên tục, không bị gián đoạn",
      "B. Yêu cầu nhà thầu cung cấp nhân công vận hành thiết bị trong suốt quá trình thực hiện hợp đồng",
      "C. Yêu cầu về thiết bị dự phòng, việc bố trí thiết bị dự phòng tại cơ sở y tế (nếu cần thiết)",
      "D. Yêu cầu về kỹ thuật đối với thiết bị; yêu cầu đối với phần mềm vận hành thiết bị, hiệu chỉnh thiết bị",
    ],
    answer:
      "B. Yêu cầu nhà thầu cung cấp nhân công vận hành thiết bị trong suốt quá trình thực hiện hợp đồng",
  },
  {
    question:
      "20. Các hàng hóa, dịch vụ được khuyến khích mua sắm tập trung không bao gồm:",
    options: [
      "A. Thiết bị công nghệ thông tin đã được chuẩn hóa",
      "B. Thiết bị văn phòng",
      "C. Dịch vụ bảo vệ, vệ sinh",
      "D. Quốc phòng & an ninh",
    ],
    answer: "D. Quốc phòng & an ninh",
  },
  {
    question:
      "21. Trước khi phê duyệt hồ sơ mời thầu đối với gói thầu áp dụng hình thức chào hàng cạnh tranh, chủ đầu tư:",
    options: [
      "A. Không phải thẩm định hồ sơ mời thầu",
      "B. Bắt buộc phải thẩm định hồ sơ mời thầu",
      "C. Do tổ chuyên gia đề xuất",
      "D. Xin ý kiến người có thẩm quyền về việc không thực hiện thẩm định hồ sơ mời thầu",
    ],
    answer: "A. Không phải thẩm định hồ sơ mời thầu",
  },
  {
    question:
      "22. Đối với đấu thầu không qua mạng, trường hợp nhà thầu liên danh, đơn dự thầu phải do ai ký?",
    options: [
      "A. Đại diện hợp pháp của từng thành viên liên danh",
      "B. Thành viên được phân công thay mặt liên danh",
      "C. Đại diện hợp pháp của từng thành viên liên danh hoặc Thành viên được phân công thay mặt liên danh",
      "D. Tất cả các đáp án trên đều sai",
    ],
    answer:
      "C. Đại diện hợp pháp của từng thành viên liên danh hoặc Thành viên được phân công thay mặt liên danh",
  },
  {
    question:
      "23. Trường hợp sửa đổi hồ sơ mời thầu sau khi phát hành, chủ đầu tư phải đăng tải quyết định sửa đổi kèm theo hồ sơ mời thầu sửa đổi trên Hệ thống mạng đấu thầu quốc gia trong thời gian tối thiểu bao nhiêu ngày trước ngày có thời điểm đóng thầu đối với gói thầu xây lắp có giá gói thầu 25 tỷ đồng?",
    options: [
      "A. Tối thiểu là 03 ngày làm việc",
      "B. Tối thiểu là 05 ngày làm việc",
      "C. Tối thiểu là 07 ngày làm việc",
      "D. Tối thiểu là 10 ngày",
    ],
    answer: "D. Tối thiểu là 10 ngày",
  },
  {
    question:
      "24. Phương pháp giá cố định trong đánh giá hồ sơ dự thầu gói thầu tư vấn được áp dụng khi nào?",
    options: [
      "A. Nhà thầu là tổ chức",
      "B. Nhà thầu là cá nhân, nhóm cá nhân",
      "C. Nhà thầu là hộ kinh doanh",
      "D. Tất cả đều sai",
    ],
    answer: "B. Nhà thầu là cá nhân, nhóm cá nhân",
  },
  {
    question:
      "25. Đối với chào giá trực tuyến rút gọn, việc thực hiện bảo đảm dự thầu bằng cách thức nào?",
    options: [
      "A. Đặt cọc",
      "B. Thư bảo lãnh",
      "C. Giấy chứng nhận bảo hiểm bảo lãnh",
      "D. Tất cả đáp án trên đều sai",
    ],
    answer: "D. Tất cả đáp án trên đều sai",
  },
  {
    question:
      "26. Đối với đấu thầu không qua mạng trường hợp có sự sai khác giữa bản gốc và bản chụp làm thay đổi thứ tự xếp hạng nhà thầu thì:",
    options: [
      "A. Căn cứ bản chụp để đánh giá",
      "B. Căn cứ bản gốc để đánh giá",
      "C. Hồ sơ dự thầu của nhà thầu bị loại",
      "D. Yêu cầu nhà thầu đính chính lại hồ sơ dự thầu",
    ],
    answer: "C. Hồ sơ dự thầu của nhà thầu bị loại",
  },
  {
    question:
      "27. Phương pháp giá thấp nhất thường được áp dụng trong trường hợp nào sau đây?",
    options: [
      "A. Gói thầu mà các đề xuất về kỹ thuật, tài chính, thương mại được coi là cùng một mặt bằng khi đáp ứng các yêu cầu của hồ sơ mời thầu",
      "B. Gói thầu mà các chi phí quy đổi được trên cùng một mặt bằng về các yếu tố kỹ thuật, tài chính, thương mại cho cả vòng đời sử dụng của hàng hóa, công trình, dịch vụ phi tư vấn",
      "C. Gói thầu đặc thù, kỹ thuật cao tổ chức đấu thầu quốc tế",
      "D. Gói thầu có yêu cầu sử dụng công nghệ hoặc sản phẩm thuộc Danh mục công nghệ chiến lược và sản phẩm công nghệ chiến lược theo quy định của pháp luật về khoa học, công nghệ và đổi mới sáng tạo, pháp luật về công nghệ cao",
    ],
    answer:
      "A. Gói thầu mà các đề xuất về kỹ thuật, tài chính, thương mại được coi là cùng một mặt bằng khi đáp ứng các yêu cầu của hồ sơ mời thầu",
  },
  {
    question:
      "28. Trường hợp nhà thầu có thư giảm giá, việc sửa lỗi và hiệu chỉnh sai lệch được thực hiện trên cơ sở nào?",
    options: [
      "A. Giá dự thầu đã trừ giá trị giảm giá",
      "B. Giá dự thầu chưa bao gồm thuế trừ giá trị giảm giá",
      "C. Giá dự thầu chưa trừ đi giá trị giảm giá",
      "D. Do chủ đầu tư quyết định",
    ],
    answer: "C. Giá dự thầu chưa trừ đi giá trị giảm giá",
  },
  {
    question:
      "29. Trường hợp cần làm rõ hồ sơ mời thầu, tổ chức, cá nhân gửi văn bản đề nghị trên Hệ thống mạng đấu thầu quốc gia trong thời hạn tối thiểu bao nhiêu ngày làm việc trước ngày đóng thầu (đối với đấu thầu trong nước)?",
    options: [
      "A. 05 ngày",
      "B. 03 ngày",
      "C. 03 ngày làm việc",
      "D. 05 ngày làm việc",
    ],
    answer: "C. 03 ngày làm việc",
  },
  {
    question:
      "30. Đối với gói thầu xây lắp, trường hợp nhân sự chủ chốt không đáp ứng yêu cầu của hồ sơ mời thầu thì:",
    options: [
      "A. Nhà thầu bị loại vì không đáp ứng yêu cầu về nhân sự chủ chốt",
      "B. Nhà thầu được phép bổ sung, thay đổi đối với từng nhân sự chủ chốt tối đa 01 lần",
      "C. Nhà thầu được phép bổ sung, thay đổi đối với từng nhân sự chủ chốt tối đa 02 lần",
      "D. Nhà thầu được phép bổ sung, thay đổi đối với từng nhân sự chủ chốt tối đa 03 lần",
    ],
    answer:
      "B. Nhà thầu được phép bổ sung, thay đổi đối với từng nhân sự chủ chốt tối đa 01 lần",
  },
  {
    question:
      "32. Hồ sơ mời thầu không được đưa ra yêu cầu về giấy phép bán hàng, trừ trường hợp nào?",
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
      "33. Trường hợp hồ sơ dự thầu của nhà thầu chào thiếu khối lượng so với yêu cầu trong hồ sơ mời thầu thì giá trị phần công việc chào thiếu được cộng thêm theo đơn giá nào?",
    options: [
      "A. Đơn giá trong dự toán gói thầu",
      "B. Đơn giá thấp nhất của các nhà thầu khác",
      "C. Đơn giá tương ứng trong hồ sơ dự thầu",
      "D. Đơn giá cao nhất của các nhà thầu khác",
    ],
    answer: "C. Đơn giá tương ứng trong hồ sơ dự thầu",
  },
  {
    question:
      "34. Phương thức hai giai đoạn một túi hồ sơ được áp dụng khi nào?",
    options: [
      "A. Đấu thầu rộng rãi mua sắm hàng hóa, xây lắp, hỗn hợp mà đã xác định rõ yêu cầu kỹ thuật",
      "B. Đấu thầu rộng rãi, đấu thầu hạn chế đối với gói thầu mua sắm hàng hóa, xây lắp, hỗn hợp mà chưa xác định được chính xác các yêu cầu kỹ thuật cụ thể, đầy đủ tại thời điểm tổ chức đấu thầu",
      "C. Gói thầu dịch vụ tư vấn đặc thù, phức tạp áp dụng hình thức đấu thầu rộng rãi",
      "D. Gói thầu có yêu cầu đặc thù về kỹ thuật mà chỉ có một số nhà thầu đáp ứng yêu cầu của gói thầu",
    ],
    answer:
      "B. Đấu thầu rộng rãi, đấu thầu hạn chế đối với gói thầu mua sắm hàng hóa, xây lắp, hỗn hợp mà chưa xác định được chính xác các yêu cầu kỹ thuật cụ thể, đầy đủ tại thời điểm tổ chức đấu thầu",
  },
  {
    question:
      "35. Theo quy định, khi trả lời yêu cầu làm rõ hồ sơ mời thầu, chủ đầu tư không được thực hiện điều gì sau đây?",
    options: [
      "A. Đăng tải văn bản làm rõ lên Hệ thống mạng đấu thầu quốc gia",
      "B. Gia hạn thời điểm đóng thầu nếu không bảo đảm đủ thời gian theo quy định",
      "C. Nêu tên nhà thầu có yêu cầu làm rõ",
      "D. Tất cả các đáp án trên đều đúng",
    ],
    answer: "C. Nêu tên nhà thầu có yêu cầu làm rõ",
  },
  {
    question:
      "36. Trường hợp nhà thầu không đồng ý với kết quả sửa lỗi, hiệu chỉnh sai lệch, áp đơn giá của chủ đầu tư theo quy định thì:",
    options: [
      "A. Được thương thảo lại",
      "B. Được mời vào đàm phán, đối chiếu lại",
      "C. Hồ sơ dự thầu của nhà thầu đó bị loại",
      "D. Được gửi lại bản chào giá mới",
    ],
    answer: "C. Hồ sơ dự thầu của nhà thầu đó bị loại",
  },
  {
    question:
      "37. Tại bước đánh giá về tính hợp lệ, hồ sơ dự thầu của nhà thầu sẽ bị loại nếu trong thời gian bao lâu trước thời điểm đóng thầu, nhà thầu có nhân sự bị Tòa án kết án có hành vi vi phạm quy định về đấu thầu gây hậu quả nghiêm trọng?",
    options: ["A. 01 năm", "B. 02 năm", "C. 03 năm", "D. 05 năm"],
    answer: "C. 03 năm",
  },
  {
    question:
      "38. Đối với nhà thầu liên danh tham dự thầu, bảo đảm dự thầu được thực hiện như thế nào?",
    options: [
      "A. Một thành viên thực hiện bảo lãnh với giá trị bất kỳ",
      "B. Mỗi thành viên thực hiện bảo lãnh với tổng giá trị bất kỳ",
      "C. Từng thành viên bắt buộc thực hiện bảo đảm dự thầu với tổng giá trị bảo đảm không thấp hơn giá trị yêu cầu tại hồ sơ mời thầu",
      "D. Có thể thỏa thuận để một thành viên hoặc từng thành viên thực hiện bảo đảm với tổng giá trị không thấp hơn giá trị yêu cầu tại hồ sơ mời thầu",
    ],
    answer:
      "D. Có thể thỏa thuận để một thành viên hoặc từng thành viên thực hiện bảo đảm với tổng giá trị không thấp hơn giá trị yêu cầu tại hồ sơ mời thầu",
  },
  {
    question: "39. Khi lập bảo đảm dự thầu, đơn vị thụ hưởng phải là ai?",
    options: [
      "A. Tổ chuyên gia",
      "B. Chủ đầu tư",
      "C. Chủ đầu tư hoặc người có thẩm quyền",
      "D. Người có thẩm quyền",
    ],
    answer: "B. Chủ đầu tư",
  },
  {
    question:
      "40. Gói thầu thuê hệ thống máy chủ, thời gian thực hiện gói thầu là 5 năm, giá gói thầu là 5 tỷ đồng, yêu cầu quy mô hợp đồng tương tự là bao nhiêu?",
    options: [
      "A. Tối thiểu 2,5 tỷ đồng",
      "B. Tối thiểu 2 tỷ đồng",
      "C. Tối thiểu 1,5 tỷ đồng",
      "D. Tối thiểu 300 triệu đồng",
    ],
    answer: "B. Tối thiểu 2 tỷ đồng",
  },
  {
    question:
      "41. Việc mở thầu phải được tiến hành công khai và bắt đầu trong thời hạn bao lâu kể từ thời điểm đóng thầu?",
    options: ["A. 01 giờ", "B. 02 giờ", "C. 03 giờ", "D. 04 giờ"],
    answer: "B. 02 giờ",
  },
  {
    question:
      "42. Gói thầu lĩnh vực dịch vụ tư vấn, sử dụng thang điểm 1.000 để xây dựng tiêu chuẩn đánh giá về kỹ thuật, vậy số điểm đối với tiêu chí đánh giá về uy tín của nhà thầu là bao nhiêu điểm?",
    options: [
      "A. 100 điểm",
      "B. Tối thiểu 100 điểm",
      "C. 50 điểm",
      "D. Tối thiểu 50 điểm",
    ],
    answer: "C. 50 điểm",
  },
  {
    question:
      "43. Hồ sơ mời thầu phải quy định nội dung đánh giá tính hợp lệ của hồ sơ dự thầu, bao gồm:",
    options: [
      "A. Có bản gốc hồ sơ dự thầu",
      "B. Có đơn dự thầu được đại diện hợp pháp của nhà thầu ký tên, đóng dấu (nếu có) theo yêu cầu của hồ sơ mời thầu",
      "C. Hiệu lực của hồ sơ dự thầu đáp ứng yêu cầu",
      "D. Tất cả các đáp án trên",
    ],
    answer: "D. Tất cả các đáp án trên",
  },
  {
    question:
      "44. Hình thức lựa chọn nhà thầu đối với gói thầu áp dụng mua sắm tập trung:",
    options: [
      "A. Đấu thầu rộng rãi",
      "B. Chỉ định thầu, chào hàng cạnh tranh",
      "C. Đàm phán giá",
      "D. Đấu thầu rộng rãi, chỉ định thầu, chào hàng cạnh tranh, đàm phán giá, lựa chọn nhà thầu trong trường hợp đặc biệt nếu đáp ứng điều kiện áp dụng",
    ],
    answer:
      "D. Đấu thầu rộng rãi, chỉ định thầu, chào hàng cạnh tranh, đàm phán giá, lựa chọn nhà thầu trong trường hợp đặc biệt nếu đáp ứng điều kiện áp dụng",
  },
  {
    question:
      "45. Tiêu chuẩn đánh giá về kỹ thuật đối với gói thầu xây lắp có thể sử dụng phương pháp nào?",
    options: [
      "A. Đạt, không đạt",
      "B. Chấm điểm",
      "C. Đạt, không đạt hoặc Chấm điểm",
      "D. Tất cả các đáp án trên đều sai",
    ],
    answer: "C. Đạt, không đạt hoặc Chấm điểm",
  },
  {
    question:
      "46. Một nhà thầu bị phát hiện cố tình kê khai thông tin không trung thực trong hồ sơ dự thầu làm sai lệch kết quả lựa chọn nhà thầu thì Nhà thầu:",
    options: [
      "A. Bị phạt tiền",
      "B. Bị cấm tham gia hoạt động đấu thầu",
      "C. Bị đăng tải thông tin vi phạm trên cổng thông tin điện tử của Chính phủ",
      "D. Bị cảnh cáo",
    ],
    answer:
      "C. Bị đăng tải thông tin vi phạm trên cổng thông tin điện tử của Chính phủ",
  },
  {
    question: "47. Trường hợp chỉ có một nhà thầu đạt yêu cầu về kỹ thuật thì:",
    options: [
      "A. Vẫn thực hiện xếp hạng nhà thầu",
      "B. Không phải thẩm định kết quả lựa chọn nhà thầu",
      "C. Không phải xác định danh sách xếp hạng nhà thầu",
      "D. Phải hủy thông báo mời thầu, tổ chức đấu thầu lại",
    ],
    answer: "C. Không phải xác định danh sách xếp hạng nhà thầu",
  },
  {
    question:
      "48. Quy trình, thủ tục lựa chọn nhà thầu đối với đấu thầu rộng rãi, đấu thầu hạn chế KHÔNG bao gồm bước nào sau đây?",
    options: [
      "A. Chuẩn bị lựa chọn nhà thầu",
      "B. Đánh giá hồ sơ dự thầu",
      "C. Đàm phán hợp đồng (nếu có)",
      "D. Hoàn thiện, ký kết và quản lý thực hiện hợp đồng",
    ],

    answer: "D. Hoàn thiện, ký kết và quản lý thực hiện hợp đồng",
  },
  {
    question:
      "49. Sau khi mở thầu, trường hợp hồ sơ dự thầu của nhà thầu thiếu tài liệu về tư cách hợp lệ, hợp đồng có tính chất tương tự, nghĩa vụ kê khai thuế và nộp thuế, tài liệu về nhân sự cụ thể đã được đề xuất trong hồ sơ dự thầu thì chủ đầu tư sẽ:",
    options: [
      "A. Loại nhà thầu do hồ sơ không hợp lệ",
      "B. Yêu cầu nhà thầu làm rõ, bổ sung tài liệu còn thiếu",
      "C. Thực hiện đánh giá hồ sơ dự thầu dựa trên các tài liệu hiện có",
      "D. Sau khi đánh giá tài chính, nếu nhà thầu xếp hạng nhất thì cho phép nhà thầu làm rõ, bổ sung tài liệu còn thiếu",
    ],

    answer: "B. Yêu cầu nhà thầu làm rõ, bổ sung tài liệu còn thiếu",
  },
  {
    question:
      "50. Gói thầu mua sắm hàng hóa có giá 03 tỷ đồng áp dụng đấu thầu rộng rãi, thời gian chuẩn bị hồ sơ dự thầu phải bảo đảm?",
    options: [
      "A. Tối thiểu 09 ngày làm việc",
      "B. Tối thiểu 09 ngày",
      "C. Tối thiểu 07 ngày làm việc",
      "D. Tối thiểu 07 ngày",
    ],
    answer: "B. Tối thiểu 09 ngày",
  },
  {
    question:
      "11. Phương pháp giá thấp nhất thường được áp dụng trong trường hợp nào sau đây?",
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
      "31. Phương thức một giai đoạn một túi hồ sơ KHÔNG áp dụng cho trường hợp nào?",
    options: [
      "A. Đấu thầu rộng rãi mua sắm hàng hóa",
      "B. Chào hàng cạnh tranh dịch vụ phi tư vấn",
      "C. Đấu thầu rộng rãi gói thầu tư vấn",
      "D. Chỉ định thầu xây lắp công trình",
    ],
    answer: "C. Đấu thầu rộng rãi gói thầu tư vấn",
  },
  {
    question:
      "34. Doanh nghiệp khởi nghiệp sáng tạo trong nước khi chào thầu sản phẩm đổi mới sáng tạo của doanh nghiệp đó không phải đáp ứng yêu cầu nào trong thời hạn 06 năm?",
    options: [
      "A. Năng lực tài chính",
      "B. Số năm hoạt động trong cùng ngành nghề",
      "C. Đáp án A và B đều đúng",
      "D. Chỉ cần đáp ứng yêu cầu về kỹ thuật",
    ],
    answer: "C. Đáp án A và B đều đúng",
  },
];
