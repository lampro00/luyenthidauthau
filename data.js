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
    answer: "B. 5 ngày làm việc",
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
      "  Giá gói thầu được tính đúng, đủ toàn bộ chi phí để thực hiện gói thầu, kể cả: ",
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
  {
    question:
      " Phương pháp giá thấp nhất thường được áp dụng trong trường hợp nào sau đây? ",
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
      "Đối với gói thầu cung cấp dịch vụ phi tư vấn, mua sắm hàng hóa, xây lắp, hỗn hợp, nhà thầu được xem xét, đề nghị trúng thầu khi đáp ứng điều kiện nào sau đây?",
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
      "Khi nào được áp dụng hình thức đặt hàng, giao nhiệm vụ khi lựa chọn nhà thầu cung cấp sản phẩm, dịch vụ công?",
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
      "Phương thức một giai đoạn một túi hồ sơ KHÔNG áp dụng cho trường hợp nào?",
    options: [
      "A. Đấu thầu rộng rãi mua sắm hàng hóa",
      "B. Chào hàng cạnh tranh dịch vụ phi tư vấn",
      "C. Đấu thầu rộng rãi gói thầu tư vấn",
      "D. Chỉ định thầu xây lắp công trình",
    ],
    answer: "D. Chỉ định thầu xây lắp công trình",
  },
  {
    question:
      " File đính kèm trong E-HSDT không đáp ứng định dạng quy định sẽ được xử lý như thế nào?",
    options: [
      "A. Vẫn được xem xét, đánh giá",
      "B. Không được xem xét, đánh giá",
      "C. Được đánh giá lại sau",
      "D. Chỉ xem xét một phần",
    ],
    answer: "B. Không được xem xét, đánh giá",
  },
  {
    question:
      "Chủ đầu tư chịu trách nhiệm đăng tải kế hoạch tổng thể lựa chọn nhà thầu trên Hệ thống mạng đấu thầu quốc gia trong thời hạn bao lâu kể từ ngày văn bản được ban hành?",
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
      " Trường hợp Chủ đầu tư giao cho Tổ chuyên gia thực hiện việc đánh giá hồ sơ dự thầu, chi phí đánh giá hồ sơ dự thầu bằng bao nhiêu phần trăm giá gói thầu?",
    options: ["A. 0,1%", "B. 0,2%", "C. 0,3%", "D. 0,5%"],
    answer: "B. 0,2%",
  },
];
