const questions = [
  {
    question:
      "Trường hợp nào sau đây bắt buộc phải lựa chọn nhà thầu theo quy định tại Luật Đấu thầu?",
    options: [
      "A. Gói thầu thuộc dự án sử dụng vốn ngân sách nhà nước của cơ quan nhà nước",
      "B. Lựa chọn nhà thầu của doanh nghiệp nhà nước không sử dụng vốn ngân sách nhà nước",
      "C. Lựa chọn nhà thầu của đơn vị sự nghiệp công lập tự bảo đảm chi thường xuyên không sử dụng ngân sách nhà nước",
      "D. Việc thuê, mua, thuê mua nhà, trụ sở, tài sản gắn liền với đất",
    ],
    answer: "A",
  },
  {
    question: "Chọn phương án đúng về phạm vi điều chỉnh của Luật Đấu thầu?",
    options: [
      "A. Quy định về quản lý nhà nước đối với hoạt động đấu thầu",
      "B. Quy định về thẩm quyền và trách nhiệm của các Cơ quan, tổ chức, cá nhân trong hoạt động đấu thầu",
      "C. Quy định về hoạt động lựa chọn nhà thầu thực hiện gói thầu, hoạt động lựa chọn nhà đầu tư thực hiện dự án đầu tư kinh doanh",
      "D. Tất cả phương án trên đều đúng",
    ],
    answer: "D",
  },
  {
    question:
      "Trường hợp nào sau đây không thuộc đối tượng áp dụng của Luật Đấu thầu?",
    options: [
      "A. Gói thầu mua thuốc, hoá chất, vật tư xét nghiệm sử dụng nguồn ngân sách nhà nước của bệnh viện công lập A",
      "B. Gói thầu xây dựng đường giao thông sử dụng vốn đầu tư công do Ban Quản lý dự án đầu tư xây dựng công trình tỉnh A làm chủ đầu tư",
      "C. Gói thầu mua sắm trang thiết bị làm việc sử dụng vốn nhà nước của Văn phòng UBND tỉnh A",
      "D. Hoạt động mua phần mềm kế toán của hộ kinh doanh cá thể",
    ],
    answer: "D",
  },
  {
    question:
      "Theo quy định pháp luật về đấu thầu, gói thầu nào được xếp vào gói thầu cung cấp dịch vụ tư vấn",
    options: [
      "A. Thiết kế và cung cấp hệ thống xử lý nước thải",
      "B. Gói thầu lập nhiệm vụ quy hoạch vùng",
      "C. Gói thầu quảng cáo trên nền tảng xã hội và phát sóng trên VTV",
      "D. Gói thầu mua phần mềm kế toán MISA",
    ],
    answer: "B",
  },
  {
    question: "Gói thầu nào là gói thầu cung cấp dịch vụ phi tư vấn",
    options: [
      "A. Gói thầu in sổ công tác của tỉnh A",
      "B. Gói thầu thuê kiểm toán dự án",
      "C. Gói thầu mua phần mềm kế toán hỗ trợ doanh nghiệp khởi nghiệp sáng tạo, doanh nghiệp nhỏ do phụ nữ làm chủ",
      "D. Gói thầu xây dựng trụ sở làm việc của tỉnh A",
    ],
    answer: "A",
  },
  {
    question: "Theo quy định pháp luật về đấu thầu, đấu thầu là gì?",
    options: [
      "A. Là quá trình lựa chọn nhà thầu để ký kết, thực hiện hợp đồng cung cấp dịch vụ tư vấn, dịch vụ phi tư vấn, mua sắm hàng hóa, xây lắp trên cơ sở bảo đảm cạnh tranh, công bằng, minh bạch, hiệu quả kinh tế và trách nhiệm giải trình",
      "B. Là quá trình lựa chọn nhà đầu tư để ký kết, thực hiện hợp đồng dự án đầu tư kinh doanh trên cơ sở bảo đảm cạnh tranh, công bằng, minh bạch, hiệu quả kinh tế và trách nhiệm giải trình",
      "C. Là quá trình lựa chọn đơn vị để thực hiện hợp đồng thông qua các quy trình, thủ tục do pháp luật đấu thầu quy định",
      "D. Phương án A và B đều đúng",
    ],
    answer: "D",
  },
  {
    question: "Đấu thầu quốc tế là gì?",
    options: [
      "A. Là hoạt động đấu thầu mà nhà thầu trong nước, nước ngoài được tham dự thầu",
      "B. Là hoạt động đấu thầu mà nhà thầu trong nước, nước ngoài được tham dự thầu, trong đó nhà thầu trong nước bắt buộc phải liên danh với nhà thầu nước ngoài",
      "C. Là hoạt động đấu thầu chỉ nhà thầu quốc tế được phép tham dự thầu",
      "D. Là hoạt động đấu thầu chỉ nhà thầu trong nước được phép tham dự thầu",
    ],
    answer: "A",
  },
  {
    question: "Giá đề nghị trúng thầu là gì?",
    options: [
      "A. Là giá dự thầu của nhà thầu ghi trong quyết định phê duyệt kết quả lựa chọn nhà thầu.",
      "B. Là giá dự thầu của nhà thầu được đề nghị trúng thầu sau khi đã được sửa lỗi, hiệu chỉnh sai lệch theo yêu cầu của hồ sơ mời thầu, hồ sơ yêu cầu, trừ đi giá trị giảm giá (nếu có)",
      "C. Là giá dự thầu của nhà thầu chưa tính sửa lỗi, hiệu chỉnh sai lệch và giá trị giảm giá (nếu có)",
      "D. Là giá trị ghi trong hợp đồng giữa chủ đầu tư và nhà thầu",
    ],
    answer: "B",
  },
  {
    question: "Theo quy định pháp luật về đấu thầu, hàng hóa gồm?",
    options: [
      "A. Máy móc, thiết bị, nguyên liệu, nhiên liệu, vật liệu, vật tư, phụ tùng; sản phẩm; phương tiện; hàng tiêu dùng, phần mềm thương mại",
      "B. Thuốc, hóa chất, vật tư xét nghiệm, thiết bị y tế",
      "C. Phương án A và B đều đúng",
      "D. Logistics, bảo hiểm, quảng cáo, nghiệm thu chạy thử, chụp ảnh vệ tinh",
    ],
    answer: "C",
  },
  {
    question:
      "Trường hợp nào sau đây cơ quan, tổ chức, doanh nghiệp được tự quyết định việc lựa chọn nhà thầu trên cơ sở bảo đảm công khai, minh bạch, hiệu quả và trách nhiệm giải trình?",
    options: [
      "A. Thực hiện gói thầu thuộc dự án sử dụng vốn đầu tư công của cơ quan nhà nước",
      "B. Thực hiện gói thầu thuộc dự án sử dụng vốn đầu tư công của đơn vị sự nghiệp công lập bảo đảm một phần chi thường xuyên",
      "C. Thực hiện gói thầu thuộc dự án sử dụng vốn ngân sách nhà nước của doanh nghiệp nhà nước",
      "D. Lựa chọn nhà thầu của doanh nghiệp nhà nước không sử dụng vốn ngân sách nhà nước, đơn vị sự nghiệp công lập tự bảo đảm chi thường xuyên và chi đầu tư, đơn vị sự nghiệp công lập tự bảo đảm chi thường xuyên không sử dụng ngân sách nhà nước",
    ],
    answer: "D",
  },
  {
    question:
      "Điều kiện để tổ chức đấu thầu quốc tế lựa chọn nhà thầu thực hiện gói thầu mua sắm hàng hóa là gì?",
    options: [
      "A. Gói thầu mua sắm hàng hóa thông dụng, đơn giản, có sẵn trên thị trường",
      "B. Gói thầu mua sắm hàng hóa mà hàng hóa đó trong nước sản xuất được và đáp ứng các yêu cầu về kỹ thuật, chất lượng, giá nhưng chủ đầu tư yêu cầu phải mua hàng hóa nhập khẩu",
      "C. Gói thầu mua sắm hàng hóa mà hàng hóa đó trong nước không sản xuất được hoặc sản xuất được nhưng không đáp ứng một trong các yêu cầu về kỹ thuật, chất lượng, giá",
      "D. Gói thầu mua sắm hàng hóa thông dụng đã được nhập khẩu và chào bán tại Việt Nam nhưng hàng hóa đó trong nước không sản xuất được",
    ],
    answer: "C",
  },
  {
    question: "Ngôn ngữ sử dụng đối với đấu thầu quốc tế là gì?",
    options: [
      "A. Tiếng Việt",
      "B. Tiếng Đức",
      "C. Tiếng Anh hoặc tiếng Việt và tiếng Anh",
      "D. Tiếng Đức hoặc tiếng Anh",
    ],
    answer: "C",
  },
  {
    question:
      "Đối với đấu thầu quốc tế, trường hợp ngôn ngữ sử dụng trong hồ sơ mời thầu là tiếng Việt và tiếng Anh thì khi tham dự thầu, nhà thầu sử dụng ngôn ngữ gì?",
    options: [
      "A. Chỉ tiếng Việt",
      "B. Chỉ tiếng Anh",
      "C. Tiếng Việt hoặc tiếng Anh",
      "D. Bắt buộc cả tiếng Việt và tiếng Anh",
    ],
    answer: "C",
  },
  {
    question: "Gói thầu mua thuốc là gói thầu nào?",
    options: [
      "A. Gói thầu mua sắm hàng hóa",
      "B. Gói thầu cung cấp dịch vụ phi tư vấn",
      "C. Gói thầu hỗn hợp",
      "D. Gói thầu xây lắp",
    ],
    answer: "A",
  },
  {
    question:
      "Nội dung nào không thuộc nội dung quản lý nhà nước đối với hoạt động đấu thầu?",
    options: [
      "A. Quản lý hệ thống thông tin và cơ sở dữ liệu về đấu thầu trên phạm vi cả nước",
      "B. Lập hồ sơ mời quan tâm, hồ sơ mời sơ tuyển, hồ sơ mời thầu, hồ sơ yêu cầu.",
      "C. Đào tạo, bồi dưỡng kiến thức, nghiệp vụ chuyên môn về đấu thầu",
      "D. Hợp tác quốc tế về đấu thầu",
    ],
    answer: "B",
  },
  {
    question:
      "Đơn vị sự nghiệp công lập A đã trúng thầu gói thầu tổ chức lớp đào tạo cán bộ cho UBND tỉnh X sử dụng vốn ngân sách địa phương. Đơn vị sự nghiệp công lập A có phải tổ chức lựa chọn nhà thầu theo Luật Đấu thầu để thuê dịch vụ hậu cần (như địa điểm ăn nghỉ, photo tài liệu, hội trường tổ chức) hay không?",
    options: [
      "A. Phải lựa chọn nhà thầu theo quy định của Luật Đấu thầu",
      "B. Căn cứ vào hợp đồng quy định giữa đơn vị A và UBND tỉnh X",
      "C. Đơn vị A được tự quyết định việc mua sắm trên cơ sở bảo đảm công khai, minh bạch, hiệu quả và trách nhiệm giải trình",
      "D. Căn cứ theo phân cấp quyết định mua sắm của UBND tỉnh X",
    ],
    answer: "C",
  },
  {
    question:
      "Sở Y tế tỉnh A được doanh nghiệp trong nước tài trợ 5 tỷ đồng để mua sắm thuốc phục vụ khám chữa bệnh cho người nghèo, hỏi Sở Y tế có phải tổ chức đấu thầu thuốc theo quy định của Luật Đấu thầu không?",
    options: [
      "A. Sở Y tế A được tự quyết định việc mua sắm trên cơ sở bảo đảm công khai, minh bạch, hiệu quả và trách nhiệm giải trình trong trường hợp nhà tài trợ yêu cầu không lựa chọn nhà thầu theo quy định của Luật Đấu thầu",
      "B. Sở Y tế A phải tổ chức lựa chọn nhà thầu theo quy định của Luật Đấu thầu",
      "C. Trong mọi trường hợp Sở Y tế A không phải thực hiện theo Luật Đấu thầu do đây là nguồn doanh nghiệp trong nước tài trợ",
      "D. Phải xin ý kiến của UBND tỉnh A để có cơ sở xác định có phải tổ chức lựa chọn nhà thầu theo Luật Đấu thầu hay không",
    ],
    answer: "A",
  },
  {
    question: "Hãy chọn phương án đúng về đấu thầu trước?",
    options: [
      "A. Đấu thầu trước là việc thực hiện trước một số thủ tục trước khi dự án được phê duyệt đầu tư nhằm mục đích đẩy nhanh tiến độ thực hiện dự án, trừ gói thầu cần thực hiện trước khi phê duyệt dự án",
      "B. Đấu thầu trước là việc thực hiện các gói thầu thuộc giai đoạn chuẩn bị đầu tư",
      "C. Đấu thầu trước là việc lựa chọn nhà thầu không cần phê duyệt kế hoạch lựa chọn nhà thầu để đẩy nhanh tiến độ thực hiện",
      "D. Đấu thầu trước là việc thực hiện trước một số thủ tục trước khi dự án, dự toán mua sắm được phê duyệt nhằm mục đích đẩy nhanh tiến độ thực hiện dự án, trừ gói thầu cần thực hiện trước khi phê duyệt dự án",
    ],
    answer: "A",
  },
  {
    question: "Bảo đảm cạnh tranh trong đấu thầu thuộc nội dung đánh giá về?",
    options: [
      "A. Tư cách hợp lệ",
      "B. Năng lực, kinh nghiệm",
      "C. Kỹ thuật",
      "D. Tài chính",
    ],
    answer: "A",
  },
  {
    question:
      "Nhà thầu tham gia đấu thầu gói thầu hàng hóa phải độc lập với chủ thể nào sau đây?",
    options: [
      "A. Phải độc lập với nhà thầu tư vấn lập hồ sơ mời thầu gói thầu hàng hóa",
      "B. Phải độc lập với nhà thầu khác khi tham gia đấu thầu rộng rãi",
      "C. Phải độc lập với nhà thầu tư vấn lập kế hoạch tổng thể lựa chọn nhà thầu",
      "D. Phải độc lập với nhà thầu tư vấn lập kế hoạch lựa chọn nhà thầu",
    ],
    answer: "A",
  },
  {
    STT: "21",
    question:
      "Nhận định nào sau đây không phù hợp với quy định về bảo đảm cạnh tranh trong đấu thầu?",
    options: [
      "A. Nhà thầu tham dự thầu phải độc lập với chủ đầu tư, trừ trường hợp: nhà thầu là đơn vị sự nghiệp công lập thuộc cơ quan quản lý nhà nước có chức năng, nhiệm vụ được giao phù hợp với tính chất gói thầu của cơ quan quản lý nhà nước đó; đơn vị sự nghiệp công lập và doanh nghiệp có cùng một cơ quan trực tiếp quản lý, góp vốn; các đơn vị sự nghiệp công lập có cùng một cơ quan trực tiếp quản lý",
      "B. Nhà thầu tham dự thầu phải độc lập với nhà thầu tư vấn quản lý dự án, tư vấn giám sát",
      "C. Nhà thầu tham dự thầu phải độc lập với nhà thầu tư vấn lập, thẩm tra, thẩm định hồ sơ thiết kế, dự toán",
      "D. Nhà thầu thực hiện hợp đồng phải độc lập với nhà thầu tư vấn lập kế hoạch lựa chọn nhà thầu.",
    ],
    answer: "D",
  },
  {
    STT: "22",
    question:
      "Nội dung nào sau đây không thuộc quy định về bảo đảm cạnh tranh trong đấu thầu khi nhà thầu tham dự thầu đấu thầu rộng rãi gói thầu EPC, EP, EC?",
    options: [
      "A. Nhà thầu tham dự thầu phải độc lập với nhà thầu lập, thẩm tra thiết kế FEED",
      "B. Nhà thầu tham dự thầu phải độc lập với nhà thầu lập, thẩm tra báo cáo nghiên cứu khả thi trong trường hợp không lập thiết kế FEED",
      "C. Nhà thầu tham dự thầu phải độc lập với nhà thầu lập, thẩm tra báo cáo kinh tế kỹ thuật trong trường hợp không lập báo cáo nghiên cứu khả thi, không lập thiết kế FEED theo quy định của pháp luật về xây dựng",
      "D. Nhà thầu tham dự thầu phải độc lập với nhà thầu khác cùng tham dự đấu thầu rộng rãi",
    ],
    answer: "D",
  },
  {
    STT: "23",
    question:
      "Trường hợp gói thầu có tính chất đặc thù và áp dụng hình thức chỉ định thầu hoặc lựa chọn nhà thầu trong trường hợp đặc biệt, nhà thầu nước ngoài có yêu cầu ràng buộc chỉ ký hợp đồng khi không phải đăng ký trên Hệ thống mạng đấu thầu quốc gia thì chủ đầu tư xử lý như thế nào?",
    options: [
      "A. Không cần yêu cầu nhà thầu nước ngoài đăng ký khi đăng tải kết quả lựa chọn nhà thầu.",
      "B. Yêu cầu nhà thầu nước ngoài đăng ký khi đăng tải kết quả lựa chọn nhà thầu",
      "C. Nhà thầu không được chấp nhận và bị loại",
      "D. Hủy thầu",
    ],
    answer: "A",
  },
  {
    STT: "24",
    question:
      "Đối với gói thầu tổ chức lựa chọn nhà thầu qua mạng, trường hợp trong quá trình đánh giá E-HSDT mà chưa có kết quả lựa chọn nhà thầu, nhà thầu có tên trong biên bản mở thầu bị khóa tài khoản theo quy định của pháp luật về đấu thầu thì chủ đầu tư xử lý như thế nào?",
    options: [
      "A. Yêu cầu nhà thầu thực hiện các thủ tục để mở khóa tài khoản làm cơ sở xem xét, đánh giá E-HSDT của nhà thầu",
      "B. Tiếp tục xem xét, đánh giá E-HSDT của nhà thầu",
      "C. Không tiếp tục xem xét, đánh giá E-HSDT của nhà thầu.",
      "D. Tiếp tục xem xét, đánh giá E-HSDT của nhà thầu và yêu cầu nhà thầu thực hiện các thủ tục để mở khóa tài khoản trước khi phê duyệt kết quả lựa chọn nhà thầu",
    ],
    answer: "C",
  },
  {
    STT: "25",
    question: "Đàm phán giá được áp dụng trong trường hợp nào sau đây?",
    options: [
      "A. Mua vật tư tiêu hao",
      "B. Mua thuốc, thiết bị y tế, vật tư xét nghiệm chỉ có 01 hoặc 02 hãng sản xuất",
      "C. Mua hàng hóa chỉ có 01 hàng sản xuất",
      "D. Mua hàng hóa chỉ có 01 hoặc 02 hãng sản xuất",
    ],
    answer: "B",
  },
  {
    STT: "26",
    question:
      "Chọn phương án đúng về thời gian áp dụng mua sắm trực tuyến đối với các hạng mục trong danh mục hàng hóa, dịch vụ mua sắm tập trung?",
    options: [
      "A. Thời gian áp dụng là thời gian thực hiện hợp đồng trong trường hợp không ký thỏa thuận khung nhưng không quá 24 tháng kể từ ngày hợp đồng có hiệu lực hoặc thời gian có hiệu lực của thỏa thuận khung",
      "B. Thời gian áp dụng là 24 tháng kể từ ngày kết quả lựa chọn nhà thầu được đăng tải trên Hệ thống mạng đấu thầu quốc gia trong trường hợp hợp đồng, thỏa thuận khung chưa được công khai",
      "C. Thời gian áp dụng là 24 tháng kể từ ngày kết quả lựa chọn nhà thầu được đăng tải trên Hệ thống mạng đấu thầu quốc gia",
      "D. Phương án A và B đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "27",
    question:
      "Mua sắm trực tuyến được áp dụng đối với hàng hoá, dịch vụ của gói thầu thuộc dự toán mua sắm với giá gói thầu có hạn mức tối đa là bao nhiêu?",
    options: [
      "A. 100 triệu đồng",
      "B. 300 triệu đồng",
      "C. 500 triệu đồng",
      "D. 01 tỷ đồng",
    ],
    answer: "C",
  },
  {
    STT: "28",
    question:
      "Chào giá trực tuyến theo quy trình thông thường áp dụng đối với gói thầu nào sau đây?",
    options: [
      "A. Dịch vụ phi tư vấn thông dụng, đơn giản",
      "B. Xây lắp",
      "C. Dịch vụ tư vấn",
      "D. Hỗn hợp",
    ],
    answer: "A",
  },
  {
    STT: "29",
    question:
      "Đối với chào giá trực tuyến rút gọn, kể từ lượt chào giá thứ hai, giá chào của nhà thầu không được thấp hơn giá thấp nhất hiển thị trên Hệ thống mạng đấu thầu quốc gia là bao nhiêu %?",
    options: ["A. 80%", "B. 85%", "C. 90%", "D. 95%"],
    answer: "C",
  },
  {
    STT: "30",
    question:
      "Đối với chào giá trực tuyến rút gọn, giá trị bảo đảm dự thầu tối đa là giá trị nào sau đây?",
    options: [
      "A. 5% giá gói thầu",
      "B. 10% giá gói thầu",
      "C. 1-3% giá gói thầu",
      "D. Không yêu cầu về bảo đảm dự thầu",
    ],
    answer: "B",
  },
  {
    STT: "31",
    question:
      "Đối với gói thầu áp dụng chào giá trực tuyến theo quy trình thông thường, trường hợp nhà thầu được mời tham gia chào giá trực tuyến nhưng nhà thầu từ chối tham gia thì xử lý thế nào?",
    options: [
      "A. Đề xuất về tài chính của nhà thầu sẽ bị đánh giá là không đạt",
      "B. Nhà thầu sẽ bị loại và bị khóa tài khoản trên Hệ thống mạng đấu thầu quốc gia trong vòng 06 tháng",
      "C. Hồ sơ dự thầu của nhà thầu sẽ tiếp tục được đánh giá về tài chính căn cứ theo hồ sơ dự thầu đã nộp trước thời điểm đóng thầu",
      "D. Phương án A và B đều đúng",
    ],
    answer: "C",
  },
  {
    STT: "32",
    question:
      "Hình thức lựa chọn nhà thầu khi áp dụng mua sắm tập trung bảo hiểm tài sản cho các cơ quan thuộc tỉnh Y",
    options: [
      "A. Đấu thầu rộng rãi.",
      "B. Đấu thầu hạn chế.",
      "C. Đàm phán giá.",
      "D. Đấu thầu rộng rãi và đàm phán giá.",
    ],
    answer: "A",
  },
  {
    STT: "33",
    question:
      "Áp dụng hình thức lựa chọn nhà thầu nào khi mua sắm tập trung đối với gói thầu điều hòa không khí thông dụng, sẵn có trên thị trường, có giá gói thầu là 03 tỷ đồng cho các cơ quan thuộc tỉnh X?",
    options: [
      "A. Đấu thầu rộng rãi hoặc mua sắm trực tiếp",
      "B. Đấu thầu rộng rãi hoặc chỉ định thầu theo hạn mức",
      "C. Đấu thầu rộng rãi hoặc chào hàng cạnh tranh",
      "D. Đấu thầu rộng rãi hoặc chỉ định thầu hoặc đám phán giá.",
    ],
    answer: "C",
  },
  {
    STT: "34",
    question:
      "Gói thầu nào sau đây thuộc trường hợp được áp dụng chào hàng cạnh tranh?",
    options: [
      "A. Tất cả gói thầu hàng hoá có giá không quá 10 tỷ đồng",
      "B. Gói thầu dịch vụ phi tư vấn thông dụng, đơn giản có giá không quá 10 tỷ đồng",
      "C. Gói thầu dịch vụ tư vấn thông dụng, đơn giản có giá không quá 5 tỷ đồng",
      "D. Gói thầu xây lắp công trình đơn giản đã có dự toán được phê duyệt có giá không quá 15 tỷ đồng",
    ],
    answer: "B",
  },
  {
    STT: "35",
    question:
      "Đối với gói thầu mua sắm hàng hóa thông dụng, sẵn có trên thị trường có giá gói thầu 05 tỷ đồng thì kế hoạch lựa chọn nhà thầu phê duyệt áp dụng hình thức lựa chọn nhà thầu nào sau đây?",
    options: [
      "A. Chỉ được áp dựng hình thức chào hàng cạnh tranh",
      "B. Được áp dựng hình thức chào hàng cạnh tranh hoặc đấu thầu rộng rãi",
      "C. Bắt buộc áp dụng hình thức chỉ định thầu",
      "D. Được áp dụng hình thức chỉ định thầu hoặc chào hàng cạnh tranh hoặc đấu thầu rộng rãi",
    ],
    answer: "B",
  },
  {
    STT: "36",
    question:
      "Hạn mức chỉ định thầu đổi với gói thầu không hình thành dự án thuộc dự toán mua sắm thường xuyên là:",
    options: [
      "A. 500 triệu đồng",
      "B. 800 triệu đồng",
      "C. 01 tỷ đồng",
      "D. 300 triệu đồng",
    ],
    answer: "A",
  },
  {
    STT: "37",
    question:
      "Hạn mức chỉ định thâu đôi với gói thầu mua sắm hàng hóa thuộc dự án đầu tư là:",
    options: [
      "A. 800 triệu đồng",
      "B. 500 triệu đồng",
      "C. 01 tỷ đồng",
      "D. 02 tỷ đồng",
    ],
    answer: "D",
  },
  {
    STT: "38",
    question:
      "Phương án nào không phải là một trong các hình thức lựa chọn nhà thầu được phê duyệt trong kế hoạch lựa chọn nhà thầu?",
    options: [
      "A. Đấu thầu rộng rãi",
      "B. Đấu thầu hạn chế",
      "C. Mua sắm trực tiếp",
      "D. Đấu thầu qua mạng",
    ],
    answer: "D",
  },
  {
    STT: "39",
    question:
      "Gói thầu lựa chọn tư vấn là tổ chức có giá gói thầu là 500 triệu đồng áp dụng hình thức lựa chọn nhà thầu nào?",
    options: [
      "A. Chỉ được áp dụng hình thức chỉ định thầu",
      "B. Được áp dụng hình thức chỉ định thầu hoặc đấu thầu rộng rãi",
      "C. Áp dụng hình thức chào hàng cạnh tranh",
      "D. Được áp dụng hình thức chỉ định thầu hoặc đấu thầu rộng rãi hoặc chào hàng cạnh tranh",
    ],
    answer: "B",
  },
  {
    STT: "40",
    question: "Chọn phương án đúng về hạn mức đối với đấu thầu rộng rãi?",
    options: [
      "A. Không quy định hạn mức áp dụng",
      "B. Trên 20 tỷ đồng",
      "C. Trên 10 tỷ đồng",
      "D. Trên 20 tỷ đồng đối với xây lắp, hàng hoá; trên 10 tỷ đồng đối với gói thâu dịch vụ tư vân, phi tư vấn",
    ],
    answer: "A",
  },
  {
    STT: "41",
    question:
      "Chọn phương án đúng về loại gói thầu đối với hình thức mua sắm trực tiếp?",
    options: [
      "A. Chỉ gói thầu hàng hoá",
      "B. Chỉ gói thầu xây lắp",
      "C. Chỉ gói thầu phi tư vấn",
      "D. Gói thầu hàng hóa và phi tư vấn",
    ],
    answer: "A",
  },
  {
    STT: "42",
    question: "Đâu không phải là điều kiện để áp dụng mua sắm trực tiếp?",
    options: [
      "A. Nhà thầu đã trúng thầu thông qua đấu thầu rộng rãi, đấu thầu hạn chế và đã ký hợp đồng gói thầu thực hiện gói thầu trước đó",
      "B. Thời gian từ khi ký hợp đồng gói thầu trước đến ngày phê duyệt kết quả mua sắm trực tiếp không quá 12 tháng",
      "C. Đơn giá các phần việc thuộc gói thầu mua sắm trực tiếp không vượt đơn giá phần việc tương ứng của gói thầu đã ký trước đó thuộc gói thầu tương tự đã ký hợp đồng trước đó, đồng thời, phù hợp với giá thị trường tại thời điểm hoàn thiện hợp đồng",
      "D. Chủ đầu tư được áp dụng mua sắm trực tiếp nhiều lần đối với các loại hàng hóa thuộc gói thầu",
    ],
    answer: "D",
  },
  {
    STT: "43",
    question: "Hãy chọn phương án đúng về hình thức đặt hàng?",
    options: [
      "A. Là một trong các hình thức lựa chọn nhà thầu.",
      "B. Pháp luật quản lý ngành, lĩnh vực quy định về quy trình, thủ tục đặt hàng khác với quy trình, thủ tục của pháp luật về đấu thầu thì áp dụng quy định của pháp luật về đấu thầu.",
      "C. Đặt hàng chỉ được áp dụng cho sản phẩm, dịch vụ công",
      "D. Đặt hàng chỉ áp dụng đối với nguồn chi thường xuyên ngân sách nhà nước, không được áp dụng đối với nguồn vốn khác.",
    ],
    answer: "A",
  },
  {
    STT: "44",
    question:
      "Quy trình, thủ tục lựa chọn nhà thầu đối với mua sắm trực tiếp không bao gồm bước nào sau đây?",
    options: [
      "A. Thẩm định hồ sơ yêu cầu",
      "B. Đánh giá hồ sơ đề xuất và thương thảo về các đề xuất của nhà thầu",
      "C. Phát hành hồ sơ yêu cầu",
      "D. Phê duyệt và công khai kết quả mua sắm trực tiếp",
    ],
    answer: "A",
  },
  {
    STT: "45",
    question:
      "Quy trình, thủ tục lựa chọn nhà thầu đối với chào hàng cạnh tranh không bao gồm bước sau đây:",
    options: [
      "A. Phê duyệt kết quả lựa chọn nhà thầu",
      "B. Công khai kết quả lựa chọn nhà thầu",
      "C. Thẩm định kết quả lựa chọn nhà thầu",
      "D. Hoàn thiện, ký kết và quản lý thực hiện hợp đồng",
    ],
    answer: "C",
  },
  {
    STT: "46",
    question:
      "Chi phí đăng tải quyết định phê duyệt kế hoạch lựa chọn nhà thầu và quyết định phê duyệt kết quả lựa chọn nhà thầu lên Hệ thống mạng đấu thầu quốc gia đối với gói thầu chỉ định thầu là bao nhiêu?",
    options: [
      "A. 220.000 đồng/1 gói thầu (đã bao gồm thuế giá trị gia tăng)",
      "B. 330.000 đồng/1 gói thầu (đã bao gồm thuế giá trị gia tăng)",
      "C. Miễn phí",
      "D. 110.000 đồng/1 gói thầu (đã bao gồm thuế giá trị gia tăng)",
    ],
    answer: "C",
  },
  {
    STT: "47",
    question:
      "Theo quy định tại Thông tư số 79/2025/TT-BTC, quy định về thời điểm bắt đầu và kết thúc chào giá trực tuyến theo quy trình rút gọn?",
    options: [
      "A. Thời điểm bắt đầu và kết thúc phải trong giờ hành chính.",
      "B. Thời điểm bắt đầu không bắt buộc trong giờ hành chính nhưng kết thúc phải trong giờ hành chính.",
      "C. Thời điểm bắt đầu và kết thúc không bắt buộc trong giờ hành chính.",
      "D. Tất cả phương án trên đều sai",
    ],
    answer: "A",
  },
  {
    STT: "48",
    question:
      "Nhà thầu có trách nhiệm kê khai thông tin nào trên Hệ thống mạng đấu thầu quốc gia?",
    options: [
      "A. Thông tin về uy tín của nhà thầu trong việc tham dự thầu",
      "B. Thông tin về vi phạm của nhà thầu",
      "C. Thông tin về năng lực, kinh nghiệm của nhà thầu",
      "D. Cả 3 phương án trên đều đúng",
    ],
    answer: "C",
  },
  {
    STT: "49",
    question:
      "Nhận định nào sau đây đúng về văn bản điện tử trên Hệ thống mạng đấu thầu quốc gia?",
    options: [
      "A. Văn bản điện tử trên Hệ thống có giá trị theo quy định của pháp luật về giao dịch điện tử, làm cơ sở đối chiếu, so sánh, xác thực thông tin phục vụ công tác đánh giá, thẩm định, thanh tra, kiểm tra, kiểm toán và giải ngân",
      "B. Thời điểm gửi, nhận văn bản điện tử được xác định căn cứ theo thời gian thực ghi lại trên Hệ thống",
      "C. Khi gửi hồ sơ thanh quyết toán đến Kho bạc Nhà nước, nhà thầu không phải cung cấp thông tin, tài liệu cho Kho bạc Nhà nước đối với các thông tin, tài liệu là văn bản điện tử trên Hệ thống",
      "D. Cả 3 phương án trên đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "50",
    question:
      "Ai chịu trách nhiệm đăng tải thông tin chủ yếu của hợp đồng trên Hệ thống mạng đấu thầu quốc gia?",
    options: [
      "A. Bên mời thầu",
      "B. Tổ chuyên gia",
      "C. Tư vấn đấu thầu",
      "D. Chủ đầu tư",
    ],
    answer: "D",
  },
  {
    STT: "51",
    question:
      "Trong đấu thầu qua mạng, nhà thầu tư vấn đấu thầu bị khoá tài khoản trong vòng 06 tháng khi thực hiện hành vi nào sau đây?",
    options: [
      "A. Tham gia vào quá trình lập và đánh giá E-HSMT",
      "B. Tham gia vào quá trình thẩm định hồ sơ mời thầu và kết quả lựa chọn nhà thầu",
      "C. Thay chủ đầu tư đăng tải các nội dung thuộc trách nhiệm đăng tải của chủ đầu tư",
      "D. Đăng tải thông tin về năng lực, kinh nghiệm của mình trên Hệ thống mạng đấu thầu quốc gia",
    ],
    answer: "C",
  },
  {
    STT: "52",
    question:
      "Chủ đầu tư có trách nhiệm đăng tải thông tin chủ yếu của hợp đồng trên Hệ thống đấu thầu qua mạng quốc gia chậm nhất là?",
    options: [
      "A. 05 ngày làm việc kể từ ngày ký kết hợp đồng",
      "B. 05 ngày làm việc kể từ ngày hợp đồng có hiệu lực",
      "C. 05 ngày kể từ ngày hợp đồng có hiệu lực",
      "D. 05 ngày làm việc kể từ ngày nhà thầu nộp bảo đảm thực hiện hợp đồng",
    ],
    answer: "B",
  },
  {
    STT: "53",
    question:
      "Danh sách nhà thầu có hành vi vi phạm và bị đánh giá về uy tín được đăng tải trên Hệ thống mạng đấu thầu quốc gia như thế nào?",
    options: [
      "A. Tổ chuyên gia đăng tải trong thời hạn 03 ngày làm việc kể từ ngày nhà thầu có hành vi vi phạm",
      "B. Bên mời thầu đăng tải trong thời hạn 05 ngày làm việc kể từ ngày nhà thầu có hành vi vi phạm",
      "C. Chủ đầu tư đăng tải trong thời hạn 07 ngày làm việc kể từ ngày nhà thầu có hành vi vi phạm",
      "D. Người có thẩm quyền đăng tải trong thời hạn 05 ngày làm việc kể từ ngày nhà thầu có hành vi vi phạm",
    ],
    answer: "C",
  },
  {
    STT: "54",
    question:
      "Kế hoạch lựa chọn nhà thầu của dự án thuộc đối tượng áp dụng của Luật Đấu thầu bắt buộc phải đăng tải ở đâu?",
    options: [
      "A. Hệ thống mạng đấu thầu quốc gia",
      "B. Báo Tài chính-Đầu tư",
      "C. Cổng Thông tin điện tử của Bộ, ngành",
      "D. Phương án A và B đều đúng",
    ],
    answer: "A",
  },
  {
    STT: "55",
    question:
      "Chậm nhất là bao nhiêu ngày thì kế hoạch lựa chọn nhà thầu phải được đãng tải trên Hệ thống mạng đấu thầu quốc gia?",
    options: [
      "A. 05 ngày làm việc kể từ ngày kế hoạch lựa chọn nhà thầu được ban hành",
      "B. 07 ngày kê từ ngày kế hoạch lựa chọn nhà thầu được ban hành",
      "C. 07 ngày làm việc kê từ ngày kế hoạch lựa chọn nhà thầu được ban hành",
      "D. 10 ngày kể tù ngày kế hoạch lựa chọn nhà thầu được ban hành",
    ],
    answer: "A",
  },
  {
    STT: "56",
    question: "Kế hoạch lựa chọn nhà thầu bao gồm nội dung nào sau đây?",
    options: [
      "A. Giá gói thầu",
      "B. Thời gian thực hiện hợp đồng",
      "C. Giám sát hoạt động đấu thầu",
      "D. Cả 3 phương án trên đều đúng",
    ],
    answer: "A",
  },
  {
    STT: "57",
    question:
      "Đối với nội dung mua sắm có giá không quá 50 triệu đồng thì được thực hiện như thế nào?",
    options: [
      "A. Không phải lập kế hoạch lựa chọn nhà thầu nhưng phải thực hiện mua sắm trên cơ sở tiết kiệm, hiệu quả, bảo đảm đầy đủ hoá đơn, chứng từ",
      "B. Không phải lập kế hoạch lựa chọn nhà thầu nhưng phải thực hiện mua sắm theo giá công khai, giá niêm yết và không cần hoá đơn, chứng từ",
      "C. Được hình thành gói thầu để thực hiện lựa chọn nhà thầu theo một trong hình thức lựa chọn nhà thầu (đấu thầu rộng rãi, chào hàng cạnh tranh, chỉ định thầu....) nhưng phải lập kế hoạch lựa chọn nhà thầu",
      "D. Phương án A và C đúng",
    ],
    answer: "D",
  },
  {
    STT: "58",
    question:
      "Trường hợp nào sau đây việc phê duyệt kế hoạch lựa chọn nhà thầu thuộc trách nhiệm của chủ đầu tư?",
    options: [
      "A. Chủ đầu tư không có trách nhiệm phê duyệt kế hoạch lựa chọn nhà thầu",
      "B. Trong tất cả trường hợp trừ trường hợp gói thầu được thực hiện trước khi có quyết định phê duyệt dự án và chưa xác định được chủ đầu tư",
      "C. Trường hợp gói thầu được thực hiện trước khi có quyết định phê duyệt dự án và chưa xác định được chủ đầu tư",
      "D. Tất cả phương án trên đều sai",
    ],
    answer: "B",
  },
  {
    STT: "59",
    question: "Đối tượng được hưởng ưu đãi trong lựa chọn nhà thầu là gì?",
    options: [
      "A. Hàng hóa có xuất xứ Việt Nam",
      "B. Nhà thầu trong nước sản xuất hàng hóa có xuất xứ Việt Nam phù hợp với hồ sơ mời thầu",
      "C. Sản phẩm, dịch vụ thân thiện môi trường theo quy định của pháp luật về bảo vệ môi trường",
      "D. Tất cả các phương án trên đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "60",
    question:
      "Nhà thầu trong nước nào được hưởng ưu đãi trong lựa chọn nhà thầu?",
    options: [
      "A. Nhà thầu trong nước sản xuất hàng hóa có xuất xứ Việt Nam phù hợp với hồ sơ mời thầu",
      "B. Nhà thầu trong nước tham dự thầu với tư cách độc lập hoặc liên danh với nhà thầu trong nước khác khi tham dự đấu thầu quốc tế",
      "C. Nhà thầu có sử dụng lao động nữ, thương binh, người khuyết tật hoặc người dân tộc thiểu số",
      "D. Tất cả các phương án trên đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "61",
    question:
      "Trong trường hợp hủy thầu, toàn bộ hồ sơ liên quan đến quá trình lựa chọn nhà thầu của gói thầu đó có cần phải lưu trữ không?",
    options: [
      "A. Không cần lưu trữ, hủy hồ sơ ngay sau khi quyết định hủy thầu được ban hành nhưng phải đảm bảo thông tin không bị tiết lộ",
      "B. Không cần lưu trữ, trả lại hồ sơ cho nhà thầu theo nguyên trạng ngay sau khi quyết định hủy thầu được ban hành",
      "C. Có cần lưu trữ, trong thời hạn 05 năm kể từ ngày quyết định hủy thầu được ban hành",
      "D. Có cần lưu trữ, trong thời hạn 03 năm kể từ ngày quyết định hủy thầu được ban hành",
    ],
    answer: "C",
  },
  {
    STT: "62",
    question:
      "Đối với đấu thầu quốc tế, hồ sơ mời thầu được phát hành như thế nào?",
    options: [
      "A. HSMT được phát hành trên Hệ thống mạng đấu thầu quốc gia; Nhà thầu nộp tiền mua bản điện tử hồ sơ mời thầu khi nộp hồ sơ dự thầu",
      "B. HSMT được bán vào giờ hành chính từ thứ 2 tới thứ 6 tại địa chỉ do Chủ đầu tư quy định",
      "C. Phương án A và B đều đúng",
      "D. Phương án A và B đều sai",
    ],
    answer: "A",
  },
  {
    STT: "63",
    question:
      "Đối với gói thầu sử dụng vốn ngân sách nhà nước, tiền bán bản điện tử hồ sơ mời thầu, hồ sơ yêu cầu sẽ được xử lý như thế nào?",
    options: [
      "A. Sử dụng theo quy chế tài chính của chủ đầu tư",
      "B. Nộp vào ngân sách nhà nước theo quy định của Luật Ngân sách nhà nước",
      "C. Sử dụng theo cơ chế khoán chi",
      "D. Tất cả các đáp án trên đều sai",
    ],
    answer: "B",
  },
  {
    STT: "64",
    question:
      "Đối với đấu thầu qua mạng, quy định nào về việc mở thầu và công khai biên bản mở thầu trên Hệ thống mạng đấu thầu quốc gia là đúng?",
    options: [
      "A. Hệ thống tự động mở thầu và công khai biên bản mở thầu trong thời hạn không quá 02 giờ kể từ thời điểm đóng thầu.",
      "B. Chủ đầu tư phải mở thầu và công khai biên bản mở thầu trên Hệ thống trong thời hạn không quá 04 giờ kể từ thời điểm đóng thầu.",
      "C. Tổ chuyên gia phải mở thầu và công khai biên bản mở thầu trên Hệ thống trong thời hạn không quá 02 giờ kể từ thời điểm đóng thầu.",
      "D. Chủ đầu tư phải mở thầu và công khai biên bản mở thầu trên Hệ thống trong thời hạn không quá 02 giờ kể từ thời điểm đóng thầu.",
    ],
    answer: "D",
  },
  {
    STT: "65",
    question:
      "Đối với đấu thầu qua mạng, sau thời điểm đóng thầu, nhận định nào sau đây là đúng?",
    options: [
      "A. Nhà thầu có thể thay đổi nội dung E-HSDT nếu phát hiện sai sót",
      "B. Nhà thầu có thể tự làm rõ E-HSDT trên Hệ thống",
      "C. Nhà thầu không được rút E-HSDT trên Hệ thống",
      "D. Chủ đầu tư không được phép mở thầu khi chỉ có 01 nhà thầu tham dự",
    ],
    answer: "C",
  },
  {
    STT: "66",
    question: "Đối với đấu thầu qua mạng, khi tham dự thầu, nhà thầu….?",
    options: [
      "A. Chịu trách nhiệm về tính chính xác của các thông tin kê khai trên webform và file tài liệu đính kèm",
      "B. Chỉ nộp một bộ E-HSDT đối với một E-TBMT",
      "C. Chỉ được rút, sửa đổi, nộp lại E-HSDT trước thời điểm đóng thầu",
      "D. Cả 3 đáp án trên đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "67",
    question: "Khi nào nhà thầu phải nộp lại E-HSDT đã nộp?",
    options: [
      "A. Khi Tổ chuyên gia phát hiện E-HSDT bị lỗi kỹ thuật không mở được",
      "B. Khi Hệ thống mạng đấu thầu quốc gia gặp sự cố phải tự động gia hạn",
      "C. Khi E-HSMT được sửa đổi",
      "D. Các phương án trên đều đúng",
    ],
    answer: "C",
  },
  {
    STT: "68",
    question:
      "Đối với gói thầu tổ chức đấu thầu rộng rãi qua mạng, trường hợp tại thời điểm đóng thầu mà không có nhà thầu nộp E-HSDT thì chủ đầu tư quyết định theo phương án nào sau đây?",
    options: [
      "A. Huỷ E-TBMT",
      "B. Chuyển sang hình thức đấu thầu rộng rãi không qua mạng",
      "C. Cho phép gia hạn thời điểm đóng thầu tối thiểu 05 ngày làm việc đối với gói thầu xây lắp, hỗn hợp có giá gói thầu không quá 20 tỷ đồng, gói thầu mua sắm hàng hoá, dịch vụ phi tư vấn có giá không quá 10 tỷ đồng",
      "D. Phương án A và C đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "69",
    question:
      "Chủ thể nào sau đây được gia hạn thời điểm đóng thầu trên Hệ thống mạng đấu thầu quốc gia?",
    options: [
      "A. Người có thẩm quyền",
      "B. Chủ đầu tư",
      "C. Tổ chuyên gia",
      "D. Tư vấn đấu thầu",
    ],
    answer: "B",
  },
  {
    STT: "70",
    question:
      "Phát hành hồ sơ mời quan tâm, hồ sơ mời sơ tuyển, hồ sơ mời thầu được thực hiện như thế nào?",
    options: [
      "A. Hồ sơ mời quan tâm, hồ sơ mời sơ tuyển, hồ sơ mời thầu được phát hành sau khi thông báo mời quan tâm, thông báo mời sơ tuyển, thông báo mời thầu được đăng tải thành công trên Hệ thống mạng đấu thầu quốc gia",
      "B. Hồ sơ mời quan tâm, hồ sơ mời sơ tuyển, hồ sơ mời thầu được phát hành trước khi với thông báo mời quan tâm, thông báo mời sơ tuyển, thông báo mời thầu",
      "C. Hồ sơ mời quan tâm, hồ sơ mời sơ tuyển, hồ sơ mời thầu được phát hành tại thời điểm 03 ngày sau khi thông báo mời quan tâm, thông báo mời sơ tuyển, thông báo mời thầu được đăng tải thành công trên Hệ thống mạng đấu thầu quốc gia",
      "D. Hồ sơ mời quan tâm, hồ sơ mời sơ tuyển, hồ sơ mời thầu được phát hành đồng thời với thông báo mời quan tâm, thông báo mời sơ tuyển, thông báo mời thầu.",
    ],
    answer: "D",
  },
  {
    STT: "71",
    question:
      "Trường hợp tại thời điểm đóng thầu đối với gói thầu áp dụng hình thức đấu thầu rộng rãi (không áp dụng sơ tuyến, mời quan tâm, không cấp bách cần thực hiện ngay do yêu cầu về tiến độ) mà chỉ có 01 nhà thầu nộp hồ sơ dự thầu thì xứ lý như thế nào?",
    options: [
      "A. Mở thầu ngay để tiến hành đánh giá",
      "B. Gia hạn thời điểm đóng thầu tối thiểu 10 ngày",
      "C. Báo cáo người có thẩm quyền xem xét, quyết định",
      "D. Phương án A và B đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "72",
    question:
      "Khi tham dự thầu đấu thầu qua mạng, nhà thầu có được ủy quyền cho Giám đốc chi nhánh tham dự thầu hay không?",
    options: [
      "A. Được ủy quyền bằng giấy ủy quyền",
      "B. Không được ủy quyền",
      "C. Được ủy quyền không cần giấy ủy quyền nhưng nhà thầu phải tạo tài khoản nghiệp vụ cho giám đốc chi nhánh",
      "D. Các phương án trên đều sai",
    ],
    answer: "A",
  },
  {
    STT: "73",
    question:
      "Nhà thầu không phải đính kèm thư bảo lãnh (hoặc giấy chứng nhận bảo hiểm bảo lãnh) mà chỉ phải cam kết trong đơn dự thầu khi?",
    options: [
      "A. E-HSMT yêu cầu giá trị bảo đảm dự thầu là 40 triệu đồng",
      "B. E-HSMT yêu cầu giá trị bảo đảm dự thầu là 50 triệu đồng",
      "C. E-HSMT yêu cầu giá trị bảo đảm dự thầu là 60 triệu đồng",
      "D. E-HSMT yêu cầu giá trị bảo đảm dự thầu là 100 triệu đồng",
    ],
    answer: "A",
  },
  {
    STT: "74",
    question:
      "Bản gốc thư bảo lãnh dự thầu, giấy chứng nhận bảo hiểm bảo lãnh trong đấu thầu qua mạng được nộp như thế nào?",
    options: [
      "A. Gửi qua email đến Tổ trưởng Tổ chuyên gia",
      "B. Gửi cho Chủ đầu tư khi nhà thầu được mời vào đối chiếu tài liệu",
      "C. Gửi bản gốc đến địa chỉ bên mời thầu theo quy định trong E-HSMT",
      "D. Gửi cho Đơn vị tư vấn đấu thầu đánh giá E-HSDT",
    ],
    answer: "B",
  },
  {
    STT: "75",
    question:
      "Chủ đầu tư yêu cầu gia hạn hiệu lực hồ sơ dự thầu, bảo đảm dự thầu trong trường hợp nào sau đây?",
    options: [
      "A. Trước khi hết hạn hiệu lực hồ sơ dự thầu",
      "B. Trường hợp hồ sơ dự thầu của nhà thầu xếp hạng tiếp theo hết hiệu lực thì Chủ đầu tư phải yêu cầu nhà thầu gia hạn hiệu lực của hồ sơ dự thầu, bảo đảm dự thầu trước khi thương thảo hợp đồng",
      "C. Trước khi có kết quả lựa chọn nhà thầu",
      "D. Phương án A và B đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "76",
    question: "Một trong các căn cứ lập hồ sơ mời thầu là?",
    options: [
      "A. Báo giá của nhà thầu",
      "B. Quyết định mua sắm được phê duyệt",
      "C. Kế hoạch lựa chọn nhà thầu được duyệt",
      "D. Phương án A và B đều đúng",
    ],
    answer: "C",
  },
  {
    STT: "77",
    question:
      "Đối với gói thầu cung cấp dịch vụ tư vấn, phương pháp đánh giá nào không được áp dụng?",
    options: [
      "A. Giá thấp nhất",
      "B. Giá đánh giá",
      "C. Kết hợp giữa kỹ thuật và giá",
      "D. Giá cố định",
    ],
    answer: "B",
  },
  {
    STT: "78",
    question: "Nội dung nào sau đây không thuộc hồ sơ mời thầu?",
    options: [
      "A. Chỉ dẫn nhà thầu, tùy chọn mua thêm",
      "B. Bảng dữ liệu đấu thầu",
      "C. Phạm vi cung cấp, yêu cầu về kỹ thuật",
      "D. Biên bản hoàn thiện hợp đồng",
    ],
    answer: "D",
  },
  {
    STT: "79",
    question:
      "Theo Thông tư số 21/2022/TT-BKHĐT, khi nào được đưa ra yêu cầu về nhân sự chủ chốt trong gói thầu dịch vụ phi tư vấn?",
    options: [
      "A. Trong mọi trường hợp",
      "B. Khi giá gói thầu lớn",
      "C. Chỉ khi dịch vụ có yếu tố đặc thù, phức tạp cần thiết phải có nhân sự có hiểu biết, nhiều kinh nghiệm đảm nhận",
      "D. Khi có yêu cầu của nhà thầu",
    ],
    answer: "C",
  },
  {
    STT: "80",
    question:
      "Đối với gói thầu đấu thầu qua mạng, trường hợp sửa đổi E-HSMT sau khi phát hành, chủ đầu tư phải đăng tải tài liệu nào sau đây trên Hệ thống?",
    options: [
      "A. Quyết định sửa đổi kèm theo những nội dung sửa đổi E-HSMT",
      "B. E-HSMT đã được sửa đổi",
      "C. Báo cáo thẩm định E-HSMT sửa đổi",
      "D. Phương án A và B đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "81",
    question:
      "Công việc nào sau đây phải thực hiện trên Hệ thống mạng đấu thầu quốc gia?",
    options: [
      "A. Lập E-HSMT",
      "B. Trình phê duyệt E-HSMT, phê duyệt E-HSMT",
      "C. Phê duyệt kết quả lựa chọn nhà thầu",
      "D. Tất cả các phương án trên đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "82",
    question:
      "Trường hợp thuê đơn vị tư vấn lập hồ sơ mời quan tâm, hồ sơ mời sơ tuyển, hồ sơ mời thầu, hồ sơ yêu cầu; đánh giá hồ sơ quan tâm, hồ sơ dự sơ tuyển, hồ sơ dự thầu, hồ sơ đề xuất, tổ chuyên gia được thành lập bởi?",
    options: [
      "A. Người có thẩm quyền",
      "B. Chủ đầu tư",
      "C. Bên mời thầu",
      "D. Đơn vị tư vấn được chủ đầu tư lựa chọn",
    ],
    answer: "D",
  },
  {
    STT: "83",
    question:
      "Trường hợp nào hồ sơ mời thầu được đưa ra yêu cầu về giấy phép bán hàng ?",
    options: [
      "A. Hàng hóa thông thường, có sẵn trên thị trường",
      "B. Hàng hóa nhập khẩu",
      "C. Hàng hóa đặc thù, phức tạp cần gắn với trách nhiệm của nhà sản xuất",
      "D. Hàng hóa có giá trị lớn",
    ],
    answer: "C",
  },
  {
    STT: "84",
    question:
      "Nội dung nào sau đây nếu đưa vào E-HSMT gói thầu mua sắm hàng hóa có thể bị đánh giá là hạn chế cạnh tranh ?",
    options: [
      "A. Yêu cầu nhà thầu cung cấp tài liệu chứng minh hợp đồng tương tự",
      "B. Yêu cầu nhà thầu phải là chủ sở hữu thiết bị chào thầu",
      "C. Yêu cầu nhà thầu có năng lực tài chính lành mạnh",
      "D. Yêu cầu nhà thầu phải hoàn thành nghĩa vụ thuế",
    ],
    answer: "B",
  },
  {
    STT: "85",
    question:
      "Gói thầu mua sắm máy điều hòa không khí của Sở Tài chính tỉnh X được tổ chức đấu thầu tập trung theo hình thức đấu thầu rộng rãi qua mạng thì E- HSMT có được nêu xuất xứ hàng hóa không?",
    options: [
      "A. Được nêu xuất xứ cụ thể của một nước bất kỳ",
      "B. Được nêu xuất xứ theo nhóm nước, vùng lãnh thổ",
      'C. Được nêu xuất xứ cụ thể của một nước bất kỳ nhưng phải kèm theo cụm từ "hoặc tương đương"',
      "D. Không được nêu xuất xứ theo nhóm nước, vùng lãnh thổ",
    ],
    answer: "B",
  },
  {
    STT: "86",
    question:
      "Gói thầu mua sắm hàng hóa có khối lượng, số lượng công việc căn cứ nhu cầu theo các thời điểm khác nhau được quy định như thế nào?",
    options: [
      "A. Phải thực hiện ký kết hợp đồng trọn gói",
      "B. Có thể áp dụng loại hợp đồng theo đơn giá cố định",
      "C. Có thể áp dụng loại hợp đồng theo tùy chọn mua thêm",
      "D. Phải tổ chức đấu thầu lại khi có nhu cầu phát sinh",
    ],
    answer: "C",
  },
  {
    STT: "87",
    question:
      "Trong đấu thầu qua mạng, trường hợp có sự không thống nhất giữa thông tin kê khai trên webform và file tài liệu đính kèm về bảo đảm dự thầu thì xử lý như thế nào?",
    options: [
      "A. Căn cứ vào thông tin trên webform để đánh giá",
      "B. Căn cứ vào thông tin trên file đính kèm để đánh giá",
      "C. Yêu cầu nhà thầu làm rõ",
      "D. Nhà thầu bị loại ngay lập tức",
    ],
    answer: "B",
  },
  {
    STT: "88",
    question:
      "Đối với gói thầu xây lắp, nhà thầu được đánh giá là đạt về năng lực kỹ thuật khi?",
    options: [
      "A. Có giải pháp kỹ thuật, biện pháp thi công phù hợp",
      "B. Đảm bảo tiến độ thực hiện gói thầu",
      "C. Có đầy đủ nhân sự và thiết bị thi công theo yêu cầu",
      "D. Tất cả các phương án trên đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "89",
    question:
      "Thông tin về kết quả lựa chọn nhà thầu phải được đăng tải trên Hệ thống mạng đấu thầu quốc gia trong thời hạn bao nhiêu ngày kể từ ngày ban hành quyết định phê duyệt?",
    options: [
      "A. 03 ngày làm việc",
      "B. 05 ngày làm việc",
      "C. 07 ngày làm việc",
      "D. 10 ngày làm việc",
    ],
    answer: "B",
  },
  {
    STT: "90",
    question:
      "Đối với gói thầu mua sắm hàng hóa, trường hợp nhà thầu đề xuất hàng hóa có thông số kỹ thuật tốt hơn so với yêu cầu của E-HSMT thì?",
    options: [
      "A. Nhà thầu bị loại do không chào đúng yêu cầu",
      "B. Được đánh giá là đáp ứng yêu cầu về kỹ thuật",
      "C. Phải điều chỉnh lại thông số cho đúng với E-HSMT",
      "D. Chỉ được chấp nhận nếu giá dự thầu thấp nhất",
    ],
    answer: "B",
  },
  {
    STT: "91",
    question:
      "Trong phương pháp giá thấp nhất, hồ sơ dự thầu được xếp hạng thứ nhất khi?",
    options: [
      "A. Đáp ứng yêu cầu về kỹ thuật và có giá dự thầu thấp nhất",
      "B. Có điểm kỹ thuật cao nhất",
      "C. Đáp ứng yêu cầu về kỹ thuật và có giá đánh giá thấp nhất",
      "D. Có điểm tổng hợp cao nhất",
    ],
    answer: "A",
  },
  {
    STT: "92",
    question: "Việc đánh giá hồ sơ dự thầu được thực hiện căn cứ vào?",
    options: [
      "A. Tiêu chuẩn đánh giá và các yêu cầu khác trong hồ sơ mời thầu",
      "B. Hồ sơ dự thầu đã nộp",
      "C. Các tài liệu giải thích, làm rõ hồ sơ dự thầu của nhà thầu",
      "D. Tất cả các phương án trên đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "93",
    question:
      "Trường hợp nhà thầu không nộp bản gốc bảo đảm dự thầu theo yêu cầu của bên mời thầu trong quá trình đối chiếu tài liệu (đối với đấu thầu mạng) thì xử lý thế nào?",
    options: [
      "A. Cho phép nhà thầu bổ sung sau",
      "B. Nhà thầu không được xét trúng thầu và bị thu hồi bảo đảm dự thầu (nếu có)",
      "C. Nhà thầu bị khóa tài khoản 6 tháng",
      "D. Cả B và C đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "94",
    question:
      "Hợp đồng không thay đổi giá trong suốt quá trình thực hiện đối với toàn bộ nội dung công việc trong hợp đồng là loại hợp đồng nào?",
    options: [
      "A. Hợp đồng theo đơn giá cố định",
      "B. Hợp đồng trọn gói",
      "C. Hợp đồng theo thời gian",
      "D. Hợp đồng đơn giá điều chỉnh",
    ],
    answer: "B",
  },
  {
    STT: "95",
    question: "Thời gian có hiệu lực của hồ sơ dự thầu được tính từ?",
    options: [
      "A. Thời điểm đóng thầu đến thời điểm bên mời thầu công bố kết quả",
      "B. Thời điểm đóng thầu đến ngày ghi trong hồ sơ dự thầu",
      "C. Thời điểm đóng thầu đến ngày cuối cùng có hiệu lực theo yêu cầu của HSMT",
      "D. Ngày nhà thầu ký đơn dự thầu",
    ],
    answer: "C",
  },
  {
    STT: "96",
    question:
      "Trong đấu thầu qua mạng, nhà thầu có được phép sửa đổi E-HSDT sau khi đã đóng thầu không?",
    options: [
      "A. Được phép nếu bên mời thầu đồng ý",
      "B. Không được phép",
      "C. Được phép sửa đổi phần giá dự thầu",
      "D. Chỉ được sửa lỗi chính tả",
    ],
    answer: "B",
  },
  {
    STT: "97",
    question:
      "Nội dung nào không phải là tiêu chuẩn đánh giá về kỹ thuật của gói thầu tư vấn?",
    options: [
      "A. Giải pháp phương pháp luận",
      "B. Uy tín của nhà thầu thông qua việc tham dự thầu, kết quả thực hiện hợp đồng của nhà thầu",
      "C. Đã thực hiện nghĩa vụ kê khai thuế và nộp thuế",
      "D. Kinh nghiệm và năng lực nhà thầu",
    ],
    answer: "C",
  },
  {
    STT: "98",
    question:
      "Trong quá trình đánh giá hồ sơ dự thầu gói thầu áp dụng đấu thầu rộng rãi, chủ đầu tư phát hiện người đại diện theo pháp luật của 02 nhà thầu là anh em ruột được xem xét như thế nào?",
    options: [
      "A. Thuộc hành vi bị cấm trong đấu thầu",
      "B. Không đáp ứng yêu cầu về bảo đảm cạnh tranh trong đấu thầu",
      "C. Hồ sơ dự thầu của một trong hai nhà thầu không được xem xét",
      "D. Không thuộc hành vi bị cấm, không vi phạm quy định về bảo đảm cạnh tranh trong đấu thầu",
    ],
    answer: "D",
  },
  {
    STT: "99",
    question:
      "Việc đánh giá nhà thầu đang trong thời gian bị cấm tham dự thầu thuộc nội dung đánh giá về?",
    options: [
      "A. Kỹ thuật",
      "B. Tài chính",
      "C. Tư cách hợp lệ",
      "D. Năng lực, kinh nghiệm",
    ],
    answer: "C",
  },
  {
    STT: "100",
    question:
      "Khi đánh giá về năng lực kinh nghiệm đối với gói thầu mua sắm hàng hóa, nhà thầu được đánh giá là đạt khi?",
    options: [
      "A. Nhà thầu được đánh giá đạt tất tiêu chuẩn đánh giá về năng lực và kinh nghiệm trong hồ sơ mời thầu",
      "B. Nhà thầu đáp ứng một trong các tiêu chuẩn đánh giá về năng lực và kinh nghiệm trong hồ sơ mời thầu",
      "C. Nhà thầu đáp ứng hai phần ba các tiêu chuẩn đánh giá về năng lực và kinh nghiệm trong hồ sơ mời thầu",
      "D. Nhà thầu đáp ứng các tiêu chuẩn đánh giá về năng lực và kinh nghiệm quan trọng trong hồ sơ mời thầu",
    ],
    answer: "A",
  },
  {
    STT: "101",
    question:
      "Khi đánh giá E-HSDT gói thầu xây lắp đấu thầu rộng rãi qua mạng, trường hợp có sự không thống nhất giữa thông tin về hợp đồng tương tự kê khai trên webform và file tài liệu chứng minh các thông tin về hợp đồng đó thì xử lý như nào?",
    options: [
      "A. Đánh giá nhà thầu không đạt yêu cầu về hợp đồng tương tự",
      "B. Yêu cầu nhà thầu làm rõ E-HSDT trên Hệ thống mạng đấu thầu quốc gia",
      "C. Yêu cầu nhà thầu gửi bổ sung hợp đồng tương tự bằng bản giấy để đánh giá",
      "D. Các phương án trên đều sai",
    ],
    answer: "B",
  },
  {
    STT: "102",
    question:
      "Đối với đấu thầu qua mạng, việc trả lời yêu cầu làm rõ E-HSMT được thực hiện theo phương án nào?",
    options: [
      "A. Do tổ chuyên gia thực hiện bằng văn bản",
      "B. Do tổ chuyên gia thực hiện trên Hệ thống mạng đấu thầu quốc gia",
      "C. Do tư vấn đấu thầu thực hiện bằng tài khoản của đơn vị tư vấn",
      "D. Do Chủ đầu tư thực hiện trên Hệ thống mạng đấu thầu quốc gia",
    ],
    answer: "D",
  },
  {
    STT: "103",
    question:
      "Đối với đấu thầu qua mạng, việc làm rõ E-HSDT giữa Chủ đầu tư và nhà thầu có E-HSDT cần phải làm rõ được thực hiện như thế nào?",
    options: [
      "A. Chủ đầu tư được làm rõ đối với các nội dung về tư cách hợp lệ, năng lực, kinh nghiệm, không được làm rõ đối với yêu cầu về kỹ thuật, tài chính",
      "B. Chủ đầu tư được làm rõ đối với yêu cầu về kỹ thuật, tài chính, không được làm rõ đối với các nội dung về tư cách hợp lệ, năng lực, kinh nghiệm",
      "C. Chủ đầu tư dành cho nhà thầu tối đa 03 ngày để nhà thầu thực hiện việc làm rõ E-HSDT",
      "D. Chủ đầu tư dành cho nhà thầu tối thiểu 03 ngày làm việc để nhà thầu thực hiện việc làm rõ E-HSDT",
    ],
    answer: "B",
  },
  {
    STT: "104",
    question:
      "Đối với gói thầu tổ chức lựa chọn nhà thầu qua mạng, trong quá trình đánh giá E-HSDT, Chủ đầu tư nhận thấy nhà thầu có tên trong biên bản mở thầu đang bị khóa tài khoản theo quy định của pháp luật về đấu thầu, E HSDT của nhà thầu bị đánh giá như thế nào?",
    options: [
      "A. E-HSDT của nhà thầu được tiếp tục xem xét, đánh giá mà không cần phải mở khóa tài khoản trước khi ký hợp đồng",
      "B. E-HSDT của nhà thầu được tiếp tục xem xét, đánh giá nhưng chỉ được đề nghị trúng thầu khi thực hiện mở khóa tài khoản trước khi ký hợp đồng",
      "C. E-HSDT của nhà thầu không được tiếp tục xem xét, đánh giá",
      "D. Nhà thầu bị cấm tham gia hoạt động đấu thầu do có hành vi gian lận",
    ],
    answer: "C",
  },
  {
    STT: "105",
    question:
      "File đính kèm nào sau đây của nhà thầu nộp trên Hệ thống mạng đấu thầu quốc gia không được xem xét, đánh giá?",
    options: [
      "A. Các file mở, đọc được bằng các phần mềm thông dụng như: các phần mềm đọc, soạn thảo văn bản MS Office hoặc Open Office; các phần mềm đọc file PDF; các phần mềm thiết kế thông dụng như AutoCad, Photoshop; phần mềm đọc file ảnh tích hợp sẵn trên Hệ điều hành Windows",
      "B. Các file sử dụng phông chữ thuộc bảng mã Unicode",
      "C. Các file nén mở được bằng các phần mềm giải nén thông dụng như phần mềm giải nén ZIP tích hợp sẵn trên hệ điều hành Windows hoặc phần mềm giải nén Rar hoặc 7Zip",
      "D. Các file bị nhiễm virus, bị lỗi, hỏng",
    ],
    answer: "D",
  },
  {
    STT: "106",
    question:
      "Trong đấu thầu qua mạng, trường hợp có sự không thống nhất giữa thông tin về bảo đảm dự thầu kê khai trên webform và file tài liệu đính kèm thì xử lý như nào?",
    options: [
      "A. Căn cứ thông tin kê khai trên webform để đánh giá",
      "B. Căn cứ nội dung trong file tài liệu đính kèm để đánh giá",
      "C. Đánh giá nhà thầu không đạt nội dung về bảo đảm dự thầu",
      "D. Yêu cầu nhà thầu làm rõ để bổ sung tài liệu trên Hệ thống",
    ],
    answer: "A",
  },
  {
    STT: "107",
    question:
      "Nội dung nào sau đây không được phép yêu cầu làm rõ trong quá trình đánh giá E-HSDT?",
    options: [
      "A. Các nội dung về tư cách hợp lệ",
      "B. Các nội dung về năng lực, kinh nghiệm",
      "C. Thay đổi giá dự thầu, giá giảm giá (nếu có)",
      "D. Làm rõ các sai sót về kỹ thuật không cơ bản",
    ],
    answer: "C",
  },
  {
    STT: "108",
    question:
      "Đối với đấu thầu qua mạng, nhà thầu có tên trong biên bản mở thầu nhưng không nộp file tài liệu đính kèm chứng minh tư cách hợp lệ thì xử lý như nào?",
    options: [
      "A. Loại nhà thầu ngay lập tức",
      "B. Căn cứ thông tin nhà thầu tự kê khai trên Hệ thống để đánh giá",
      "C. Yêu cầu nhà thầu làm rõ, bổ sung tài liệu trên Hệ thống",
      "D. Phương án B và C đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "109",
    question:
      "Nhà thầu được thay thế nhân sự chủ chốt trong quá trình đánh giá E-HSDT khi nào?",
    options: [
      "A. Trong mọi trường hợp nếu nhà thầu có nhu cầu",
      "B. Khi nhân sự đã kê khai không đáp ứng yêu cầu của E-HSMT hoặc vì lý do bất khả kháng",
      "C. Không được phép thay thế nhân sự",
      "D. Chỉ được thay thế sau khi đã trúng thầu",
    ],
    answer: "B",
  },
  {
    STT: "110",
    question:
      "Việc đánh giá về kỹ thuật đối với gói thầu mua sắm hàng hóa qua mạng sử dụng phương pháp nào?",
    options: [
      "A. Phương pháp chấm điểm",
      "B. Phương pháp tiêu chí đạt, không đạt",
      "C. Kết hợp chấm điểm và đạt/không đạt",
      "D. Tùy theo quy định trong E-HSMT",
    ],
    answer: "B",
  },
  {
    STT: "111",
    question:
      "E-HSMT xây lắp quy mô nhỏ được áp dụng cho gói thầu có giá trị bao nhiêu?",
    options: [
      "A. Không quá 10 tỷ đồng",
      "B. Không quá 20 tỷ đồng",
      "C. Không quá 50 tỷ đồng",
      "D. Không quá 100 tỷ đồng",
    ],
    answer: "B",
  },
  {
    STT: "112",
    question:
      "Trong lựa chọn nhà thầu qua mạng, giá dự thầu của nhà thầu được Hệ thống xác định như thế nào?",
    options: [
      "A. Tổng hợp từ các đơn giá nhà thầu nhập trên webform",
      "B. Căn cứ theo giá trị nhà thầu ghi trong Đơn dự thầu file đính kèm",
      'C. Căn cứ theo giá trị nhà thầu nhập tại ô "Giá dự thầu" trên Hệ thống',
      "D. Căn cứ theo giá trị thấp nhất giữa webform và file đính kèm",
    ],
    answer: "A",
  },
  {
    STT: "113",
    question:
      "Trường hợp nhà thầu nộp kèm file giảm giá cùng với E-HSDT nhưng không nhập giá trị giảm giá trên webform thì giá trị giảm giá này được xử lý như thế nào?",
    options: [
      "A. Hệ thống tự động tính toán giá trị giảm giá",
      "B. Giá trị giảm giá này không được xem xét, đánh giá",
      "C. Được xem xét đánh giá nếu file đính kèm là hợp lệ",
      "D. Yêu cầu nhà thầu làm rõ để bổ sung vào Hệ thống",
    ],
    answer: "B",
  },
  {
    STT: "114",
    question: "Nội dung nào sau đây không thuộc báo cáo đánh giá E-HSDT?",
    options: [
      "A. Kiểm tra tính hợp lệ của E-HSDT",
      "B. Đánh giá về năng lực và kinh nghiệm",
      "C. Đánh giá về kỹ thuật và tài chính",
      "D. Danh sách các nhà thầu không mua hồ sơ mời thầu",
    ],
    answer: "D",
  },
  {
    STT: "115",
    question:
      "Đối với gói thầu xây lắp áp dụng đấu thầu rộng rãi qua mạng, trường hợp E- HSMT quy định nhà thầu phải cung cấp đầy đủ các tài liệu: giấy đăng ký thiết bị, hợp đồng, hóa đơn mua hàng, giấy đăng kiểm, kiểm định theo quy định của pháp luật để chứng minh khả năng huy động thiết bị thi công chủ yếu thì nhà thầu phải cung cấp những tài liệu nào?",
    options: [
      "A. Phải cung cấp đầy đủ theo yêu cầu của E-HSMT",
      "B. Chỉ cần cung cấp một trong các tài liệu: giấy đăng ký thiết bị, hợp đồng, hóa đơn mua hàng, giấy đăng kiểm, kiểm định theo quy định của pháp luật",
      "C. Phải bắt buộc cung cấp giấy đăng ký thiết bị kèm theo giấy đăng kiểm, kiểm định theo quy định của pháp luật",
      "D. Phải bắt buộc cung cấp hợp đồng, hoá đơn mua hàng",
    ],
    answer: "A",
  },
  {
    STT: "116",
    question:
      "Danh sách xếp hạng nhà thầu có phải thẩm định trước khi phê duyệt hay không?",
    options: [
      "A. Bắt buộc",
      "B. Không bắt buộc",
      "C. Do chủ đầu tư quyết định",
      "D. Do người có thẩm quyền quyết định",
    ],
    answer: "B",
  },
  {
    STT: "117",
    question:
      "Đối với gói thầu xây lắp, trường hợp công ty mẹ tham dự thầu và huy động công ty con tham gia thực hiện gói thầu thì việc đánh giá kinh nghiệm thực hiện hợp đồng tương tự được thực hiện như thế nào?",
    options: [
      "A. Đánh giá kinh nghiệm thực hiện hợp đồng tương tự của công ty mẹ, không đánh giá kinh nghiệm của công ty con",
      "B. Đánh giá kinh nghiệm thực hiện hợp đồng tương tự căn cứ vào giá trị, khối lượng công việc do công ty mẹ, công ty con đảm nhiệm trong gói thầu.",
      "C. Đánh giá kinh nghiệm thực hiện hợp đồng tương tự của công ty con, không đánh giá kinh nghiệm của công ty mẹ",
      "D. Đánh giá theo tổng kinh nghiệm thực hiện hợp đồng tương tự của công ty mẹ và công ty con",
    ],
    answer: "B",
  },
  {
    STT: "118",
    question:
      "Kinh nghiệm thực hiện hợp đồng xây lắp tương tự gói thầu chỉ bao gồm 01 công trình độc lập được xét trên cơ sở nào sau đây?",
    options: [
      "A. Xét theo công trình nhà thầu đã hoàn thành toàn bộ hoặc hoàn thành phần lớn có loại kết cấu, cấp công trình và đáp ứng quy mô theo yêu cầu của hồ sơ mời thầu",
      "B. Chỉ xét theo công trình nhà thầu đã hoàn thành toàn bộ, đã được nghiệm thu, cùng loại công trình và đáp ứng quy mô theo yêu cầu của hồ sơ mời thầu",
      "C. Xét theo các hạng mục công việc có tính chất tương tự nhà thầu đã hoàn thành phần lớn",
      "D. Tất cả phương án trên đều đúng",
    ],
    answer: "A",
  },
  {
    STT: "119",
    question:
      "Đối với gói thầu mua sắm hàng hóa tổ chức đấu thầu rộng rãi qua mạng, kinh nghiệm thực hiện hợp đồng cung cấp hàng hóa tương tự được xét trên cơ sở nào sau đây?",
    options: [
      "A. Hàng hóa có cùng chủng loại với gói thầu đang xét",
      "B. Hàng hóa thuộc cùng lĩnh vực tổng quát với hàng hóa của gói thầu",
      "C. Hàng hóa có 4 số đầu tiên mã HS cùng với mã HS của hàng hóa thuộc gói thầu",
      "D. Cả 2 phương án B và C đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "120",
    question:
      "Gói thầu dịch vụ phi tư vấn chia thành nhiều phần thì việc đánh giá về doanh thu đối với nhà thầu tham dự nhiều phần được thực hiện như thế nào?",
    options: [
      "A. Việc đánh giá về doanh thu căn cứ trên tổng giá trị doanh thu bình quân yêu cầu đối với các phần mà nhà thầu tham dự",
      "B. Việc đánh giá về doanh thu căn cứ trên từng phần mà nhà thầu tham dự",
      "C. Việc đánh giá về doanh thu căn cứ trên phần có giá trị lớn nhất trong tổng số các phần nhà thầu tham dự",
      "D. Các phương án trên đều sai",
    ],
    answer: "A",
  },

  {
    STT: "121",
    question:
      "Gói thầu mua sắm hàng hóa chia thành nhiều phần thì việc đánh giá về quy mô hợp đồng tương tự đối với nhà thầu tham dự nhiều phần được thực hiện như thế nào?",
    options: [
      "A. Việc đánh giá về quy mô hợp đồng tương tự căn cứ trên tổng quy mô hợp đồng tương tự đối với các phần mà nhà thầu tham dự",
      "B. Việc đánh giá về quy mô hợp đồng tương tự tương ứng với từng phần mà nhà thầu tham dự, nhà thầu không phái đáp ứng tổng quy mô hợp đồng tương tự đối với các phần mà nhà thầu tham dự",
      "C. Việc đánh giá về quy mô hợp đồng tương tự căn cứ trên phần có giá trị nhỏ nhất trong tổng số các phần mà nhà thầu tham dự",
      "D. Các phương án trên đều sai",
    ],
    answer: "B",
  },
  {
    STT: "122",
    question:
      "Trường hợp E-HSMT của gói thầu mua sắm hàng hóa có yêu cầu về cam kết, hợp đồng nguyên tắc bảo hành, bảo trì, duy tu, bảo dưỡng mà E-HSDT của nhà thầu không đính kèm các tài liệu này thì Chủ đầu tư xử lý như thế nào?",
    options: [
      "A. Hồ sơ dự thầu của nhà thầu bị loại, không được xem xét, đánh giá",
      "B. Chủ đầu tư yêu cầu nhà thầu làm rõ, bổ sung tài liệu trong một khoảng thời gian phù hợp nhưng không ít hơn 03 ngày làm việc để làm cơ sở đánh giá E-HSDT",
      "C. Xin ý kiến người có thấm quyền để xứ lý tình huống trong đấu thầu trên cơ sở bảo đảm các mục tiêu của công tác đấu thầu",
      "D. Tiếp tục đánh giá E-HSDT, trường hơp nhà thầu trúng thầu thì yêu cầu nhà thầu bổ sung, làm rõ tài liệu",
    ],
    answer: "B",
  },
  {
    STT: "123",
    question:
      "Đối với gói thầu mua sắm hàng hóa áp dụng đấu thầu rộng rãi, trong hồ sơ dự thầu nhà thầu không đề xuất cụ thể ký mã hiệu, nhãn hiệu, xuất xứ, hãng sản xuất thì xử lý như thế nào?",
    options: [
      "A. Chủ đầu tư yêu cầu nhà thầu làm rõ các thông tin này để làm cơ sở đánh giá trên cơ sở không được thay đổi giá dự thầu",
      "B. Tổ chuyên gia căn cứ theo cataloge, đề xuất kỳ thuật kèm theo để làm cơ sở đánh giá",
      "C. Hồ sơ dự thầu của nhà thầu không được xem xét, đánh giá",
      "D. Tiếp tục đánh giá hồ sơ dự thầu, trường hơp nhà thầu trúng thầu thì yêu cầu nhà thầu bổ sung, làm rõ các thông tin này",
    ],
    answer: "C",
  },
  {
    STT: "124",
    question:
      "Hồ sơ mời thầu của gói thầu xây lắp có quy định cho phép sử dụng nhà thầu phụ, trường hợp nhà thầu đề xuất sử dụng thầu phụ thì việc đánh giá năng lực kinh nghiệm của nhà thầu phụ được thực hiện như thế nào?",
    options: [
      "A. Đánh giá năng lực, kinh nghiệm của nhà thầu phụ căn cứ theo phần công việc nhà thầu phụ đảm nhận, nhà thầu tham dự thầu không phải đáp ứng về năng lực, kinh nghiệm đổi với phần công việc mà nhà thầu phụ đảm nhận",
      "B. Không đánh giá năng lực, kinh nghiệm của nhà thầu phụ, nhà thầu tham dự thầu vẫn phải đáp ứng về năng lực, kinh nghiệm đối với phần công việc mà nhà thầu phụ đám nhận",
      "C. Do chủ đầu tư quyết định có đánh giá hoặc không đánh giá năng lực, kinh nghiệm nhà thầu phụ",
      "D. Đánh giá năng lực, kinh nghiệm của nhà thầu phụ căn cứ theo phần công việc nhà thầu phụ đảm nhận, nhà thầu tham dự thầu cũng phải đáp ứng về năng lực, kinh nghiệm đối với phần công việc mà nhà thầu phụ đảm nhận",
    ],
    answer: "B",
  },
  {
    STT: "125",
    question:
      "Thời gian phê duyệt kết quả lựa chọn nhà thầu được quy định như thế nào?",
    options: [
      "A. Tối đa là 03 ngày làm việc kể từ ngày tổ chuyên gia trình báo cáo đánh giá hồ sơ dự thầu",
      "B. Tối đa là 05 ngày làm việc kể từ ngày tổ chuyên gia trinh báo cáo đánh giá hồ sơ dự thầu",
      "C. Tổi đa là 05 ngày làm việc kể tìr ngày tổ thẩm định trình báo cáo thẩm định kết quả lựa chọn nhà thầu",
      "D. Do chủ đầu tư quyết định trên cơ sở bảo đảm tiến độ của dự án, gói thầu và phù hợp với thời gian tổ chức lựa chọn nhà thầu trong kế hoạch lựa chọn nhà thầu được phê dưyệt",
    ],
    answer: "D",
  },
  {
    STT: "126",
    question: "Thời gian đánh giá hồ sơ dự thầu được quy định như thế nào?",
    options: [
      "A. Tối đa không quá 45 ngày đối với đấu thầu trong nước và không quá 60 ngày đối với đấu thầu quốc tế",
      "B. Do chủ đầu tư quyết định trên cơ sở bảo đảm tiến độ của dự án, gói thầu",
      "C. Do người có thẩm quyền, chủ đầu tư có trách nhiệm quyết định",
      "D. Do chủ đầu tư quyết định trên cơ sở bảo đảm tiến độ của dự án, gói thầu và phù hợp với thời gian tố chức lựa chọn nhà thầu trong kế hoạch lựa chọn nhà thầu được phê duyệt",
    ],
    answer: "D",
  },
  {
    STT: "127",
    question:
      "Hồ sơ hoàn công và quyết toán của gói thầu được lưu trữ theo quy định nào?",
    options: [
      "A. Quy định nội bộ của nhà thầu",
      "B. Quy định của tư vấn giám sát",
      "C. Quy định của pháp luật về lưu trữ",
      "D. Tất cả phương án trên đều sai",
    ],
    answer: "C",
  },
  {
    STT: "128",
    question:
      "Hợp đồng theo theo tỷ lệ phần trăm có thể được áp dụng đối với gói thầu nào sau đây?",
    options: [
      "A. Mua sắm thiết bị y tế",
      "B. Xây dựng công trình",
      "C. Bảo hiểm công trình mà giá trị hợp đồng được xác định chính xác trên cơ sở giá trị công trình thực tế được nghiệm thu",
      "D. Tư vấn giám sát",
    ],
    answer: "C",
  },
  {
    STT: "129",
    question: "Cơ sở để thanh toán hợp đồng cho nhà thầu là gì?",
    options: [
      "A. Giá hợp đồng và các điều khoản cụ thể về thanh toán được ghi trong hợp đồng",
      "B. Dự toán gói thầu và các điều khoản cụ thể về thanh toán được ghi trong hợp đồng",
      "C. Dự toán gói thầu",
      "D. Phương án A và C đều sai",
    ],
    answer: "A",
  },
  {
    STT: "130",
    question:
      "Nhà thầu không được hoàn trả bảo đảm thực hiện hợp đồng trong trường hợp nào?",
    options: [
      "A. Từ chối thực hiện hợp đồng khi hợp đồng đã có hiệu lực",
      "B. Thực hiện hợp đồng chậm tiến độ nhưng vẫn hoàn thành hợp đồng",
      "C. Nhà thầu đề nghị điều chỉnh tiến độ do bất khả kháng",
      "D. Nhà thầu đề xuất thay đổi nhà thầu phụ",
    ],
    answer: "A",
  },
  {
    STT: "131",
    question: "Trường hợp nào sau đây phải áp dụng bảo đảm thực hiện hợp đồng?",
    options: [
      "A. Nhà thầu cung dịch vụ phi tư vấn",
      "B. Nhà thầu thực hiện gói thầu có giá gói thầu thuộc hạn mức chỉ định thầu",
      "C. Nhà thầu cung cấp dịch vụ tư vấn",
      "D. Nhà thầu được lựa chọn theo hình thức tự thực hiện",
    ],
    answer: "A",
  },
  {
    STT: "132",
    question:
      "Đối với gói thầu chào giá trực tuyến rút gọn, nhà thầu xác nhận về việc chấp thuận được trao hợp đồng trong thời gian tối đa bao lâu kể từ ngày chủ đầu tư mời nhà thầu xác nhận trên Hệ thống mạng đấu thầu quốc gia?",
    options: [
      "A. 03 ngày",
      "B. 03 ngày làm việc",
      "C. 05 ngày",
      "D. 05 ngày làm việc",
    ],
    answer: "B",
  },
  {
    STT: "133",
    question:
      "Gói thầu chào giá trực tuyến rút gọn, trường hợp nhà thầu từ chối hoặc không xác nhận về việc chấp thuận được trao hợp đồng trên Hệ thống mạng đấu thầu quốc gia thì nội dung nào sau đây không đúng?",
    options: [
      "A. Công khai tên nhà thầu trên Hệ thống mạng đấu thầu quốc gia",
      "B. Khoá tài khoản trong thời hạn 03 tháng kể từ ngày Bộ Tài chính nhận được văn bản đề nghị của chủ đầu tư",
      "C. Khóa chức năng chào giá trực tuyến trong thời hạn 06 tháng kể từ ngày chủ đầu tư công khai tên nhà thầu trên Hệ thống mạng đấu thầu quốc gia",
      "D. Bị đánh giá về uy tín trong việc tham dự thầu",
    ],
    answer: "B",
  },
  {
    STT: "134",
    question:
      "Nhà thầu phải thực hiện xác nhận về việc chấp thuận được trao hợp đồng trên Hệ thống mạng đấu thầu quốc gia đối với các hình thức lựa chọn nhà thầu qua mạng nào?",
    options: [
      "A. Đấu thầu rộng rãi, chào hàng cạnh tranh, đấu thầu hạn chế.",
      "B. Chào giá trực tuyến theo quy trình thông thường",
      "C. Chào giá trực tuyến theo quy trình rút gọn",
      "D. Các phương án trên đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "135",
    question:
      "Trong mua sắm tập trung, hợp đồng điện tử có thể được ký kết giữa các đối tượng nào?",
    options: [
      "A. Đơn vị mua sắm tập trung và các nhà thầu trúng thầu (trong trường hợp không ký thỏa thuận khung)",
      "B. Đơn vị có nhu cầu mua sắm với các nhà thầu trúng thầu",
      "C. Phương án A và B đều đúng",
      "D. Phương án A và B đều sai",
    ],
    answer: "C",
  },
  {
    STT: "136",
    question:
      "Trường hợp hồ sơ dự thầu có giá dự thầu sau sửa lỗi, hiệu chỉnh sai lệch, trừ đi giá trị giảm giá (nếu có) thấp khác thường thì chủ đầu tư có thể quy định giá trị bảo đảm thực hiện hợp đồng tối đa là bao nhiêu để đề phòng rủi ro?",
    options: [
      "A. 30% giá hợp đồng.",
      "B. 35% giá hợp đồng",
      "C. 40% giá hợp đồng",
      "D. 45% giá hợp đồng",
    ],
    answer: "A",
  },
  {
    STT: "137",
    question:
      "Trường hợp một hoặc một số thành viên liên danh vi phạm hợp đồng, không còn năng lực để tiếp tục thực hiện hợp đồng, làm ảnh hưởng nghiêm trọng đến tiến độ, chất lượng, hiệu quả của gói thầu thì việc đánh giá uy tín của nhà thầu trong việc thực hiện hợp đồng được xử lý như nào?",
    options: [
      "A. Nhà thầu liên danh vi phạm hợp đồng bị coi là không hoàn thành hợp đồng và bị chủ đầu tư đăng tải thông tin nhà thầu liên danh vi phạm hợp đồng trên Hệ thống mạng đấu thầu quốc gia",
      "B. Chỉ một hoặc một số thành viên liên danh vi phạm hợp đồng bị coi là không hoàn thành hợp đồng và bị chủ đầu tư đăng tải thông tin thành viên liên danh vi phạm hợp đồng trên Hệ thống mạng đấu thầu quốc gia.",
      "C. Chỉ một hoặc một số thành viên liên danh vi phạm hợp đồng bị coi là không hoàn thành hợp đồng và bị bên mời thầu đăng tải thông tin thành viên liên danh vi phạm hợp đồng trên Hệ thống mạng đấu thầu quốc gia",
      "D. Nhà thầu liên danh vi phạm hợp đồng bị coi là không hoàn thành hợp đồng và bị bên mời thầu đăng tải thông tin nhà thầu liên danh vi phạm hợp đồng trên Hệ thống mạng đấu thầu quốc gia",
    ],
    answer: "B",
  },
  {
    STT: "138",
    question:
      "Trường hợp phải chấm dứt hợp đồng với nhà thầu vi phạm hợp đồng để thay thế nhà thầu mới thì phần công việc chưa thực hiện được áp dụng hình thức chỉ định thầu cho nhà thầu khác với giá trị được tính như nào?",
    options: [
      "A. Bằng giá trị ghi trong hợp đồng trừ đi giá trị của phần công việc đã thực hiện, được nghiệm thu trước đó",
      "B. Bằng giá trị ghi trong hợp đồng được cập nhật giá tại thời điểm áp dụng hình thức chỉ định thầu trừ đi giá trị của phần công việc đã thực hiện, được nghiệm thu trước đó",
      "C. Bằng giá trị của phần công việc còn lại được cập nhật giá tại thời điểm áp dụng hình thức chỉ định thầu",
      "D. Bằng giá trị ghi trong hợp đồng trừ đi giá trị của phần công việc đã thực hiện trước đó theo dự toán được duyệt",
    ],
    answer: "A",
  },
  {
    STT: "139",
    question:
      "Đối với nhà thầu liên danh, trường hợp trong quá trình thực hiện hợp đồng cần đẩy nhanh tiến độ thực hiện so với hợp đồng đã ký (cần sửa đổi hợp đồng) thì cần thực hiện như thế nào?",
    options: [
      "A. Các thành viên liên danh thỏa thuận, điều chỉnh về phạm vi công việc, tiến độ được rút ngắn và không phải thông báo cho chủ đầu tư",
      "B. Các thành viên liên danh thỏa thuận, điều chỉnh về phạm vi công việc, tiến độ được rút ngắn và thông báo cho chủ đầu tư",
      "C. Phải được người có thẩm quyền cho phép chủ đầu tư và nhà thầu thỏa thuận, điều chỉnh phạm vi công việc giữa các thành viên liên danh phù hợp với tiến độ hoặc tiến độ được rút ngắn",
      "D. Chủ đầu tư và nhà thầu được thỏa thuận điều chỉnh phạm vi công việc giữa các thành viên liên danh phù hợp với tiến độ hoặc tiến độ được rút ngắn.",
    ],
    answer: "D",
  },
  {
    STT: "140",
    question:
      "Trường hợp nhà thầu trúng thầu không tiến hành hoàn thiện, ký kết hợp đồng hoặc tại thời điểm ký kết hợp đồng, nhà thầu trúng thầu không đáp ứng yêu cầu về năng lực kỹ thuật, tài chính quy định tại khoản 2 Điều 66 của Luật Đấu thầu thì chủ đầu tư xử lý như thế nào trong trường hợp này?",
    options: [
      "A. Hủy quyết định phê duyệt kết quả lựa chọn nhà thầu trúng thầu",
      "B. Hủy thầu",
      "C. Không công nhận kết quả lựa chọn nhà thầu",
      "D. Đình chỉ cuộc thầu",
    ],
    answer: "A",
  },
  {
    STT: "141",
    question:
      "Biện pháp nào sau đây được thực hiện trong quá trình thực hiện hợp đồng?",
    options: [
      "A. Hủy thầu",
      "B. Đình chỉ cuộc thầu",
      "C. Không công nhận kết quả lựa chọn nhà thầu.",
      "D. Phương án A và B đều đúng",
    ],
    answer: "C",
  },
  {
    STT: "142",
    question: "Thời hạn của thỏa thuận khung:",
    options: [
      "A. Thời hạn áp dụng thỏa thuận khung được quy định là 40 tháng",
      "B. Thời hạn áp dụng thỏa thuận khung được quy định trong kế hoạch lựa chọn nhà thầu nhưng không quá 36 tháng.",
      "C. Thời hạn áp dụng thỏa thuận khung do người có thẩm quyền quyết định trong kế hoạch lựa chọn nhà thầu",
      "D. Phương án B và C đều đúng",
    ],
    answer: "B",
  },
  {
    STT: "143",
    question:
      "Tại bước hoàn thiện, ký kết và thực hiện hợp đồng với nhà thầu đối với gói thầu mua sắm tập trung:",
    options: [
      "A. Nhà thầu đã ký kết thỏa thuận khung phải thực hiện biện pháp bảo đảm thực hiện hợp đồng trước hoặc cùng thời điểm hợp đồng có hiệu lực cho đơn vị mua sắm tập trung",
      "B. Nhà thầu đã ký kết thỏa thuận khung phải thực hiện biện pháp bảo đảm thực hiện hợp đồng trước hoặc cùng thời điểm hợp đồng có hiệu lực cho đơn vị có nhu cầu mua sắm.",
      "C. Nhà thầu đã ký kết thỏa thuận khung không phải thực hiện biện pháp bảo đảm thực hiện hợp đồng trước thời điểm hợp đồng có hiệu lực cho đơn vị có nhu cầu mua sắm",
      "D. Nhà thầu đã ký kết thỏa thuận khung phải thực hiện biện pháp bảo đảm thực hiện hợp đồng sau thời điểm hợp đồng có hiệu lực cho đơn vị mua sắm tập trung",
    ],
    answer: "B",
  },
  {
    STT: "144",
    question: "Hồ sơ Hợp đồng bao gồm các tài liệu nào sau đây?",
    options: [
      "A. Văn bản hợp đồng",
      "B. Phụ lục hợp đồng gồm danh mục chi tiết về phạm vi công việc, biểu giá, tiến độ thực hiện (nếu có)",
      "C. Quyết định phê duyệt kết quả lựa chọn nhà thầu",
      "D. Tất cá các phương án trên.",
    ],
    answer: "D",
  },
  {
    STT: "145",
    question:
      "Gói thầu EC có giá dự thầu sau sửa lỗi, hiệu chỉnh sai lệch, trừ đi giá trị giảm giá bằng 85% giá gói thầu thì chủ đầu tư có thể quy định giá trị bảo đảm thực hiện hợp đồng ở mức 15% hay không?",
    options: [
      "A. Không được quy định",
      "B. Có thể quy định nhưng phải được sự đồng ý của nhà thầu",
      "C. Do chủ đầu tư quyết định để ngừa rủi ro cho quá trình thực hiện",
      "D. Có thể quy định nhưng phải được người có thầm quyền chấp thuận",
    ],
    answer: "A",
  },
  {
    STT: "146",
    question:
      "Đối với gói thầu hỗn hợp, có yêu cầu đặc thù về kỹ thuật chỉ có một số nhà thầu đáp ứng yêu cầu của gói thầu áp dụng bước thương thảo hợp đồng, trường hợp nhà thầu xếp hạng thứ nhất (danh sách xếp hạng có 03 nhà thầu) không tiến hành thương thảo, không ký biên ban thương thảo, thương thảo không thành công thì chủ đầu tư thực hiện bước tiếp theo như thế nào?",
    options: [
      "A. Mời nhà thầu xếp hạng tiếp theo vào thương thảo hợp đồng",
      "B. Huỷ thầu",
      "C. Cho phép các nhà thầu còn lại chào lại giá dự thầu",
      "D. Mời nhà thầu xếp hạng tiếp theo vào hoàn thiện hợp đồng",
    ],
    answer: "A",
  },
  {
    STT: "147",
    question:
      "Thời hiệu áp dụng biện pháp cấm tham gia hoạt động đấu thầu là bao lâu?",
    options: [
      "A. 10 năm tính từ ngày xảy ra hành vi vi phạm.",
      "B. 10 năm tính từ ngày phát hiện ra hành vi vi phạm",
      "C. 05 năm tính từ ngày phát hiện ra hành vi vi phạm",
      "D. 05 năm tính từ ngày xảy ra hành vi vi phạm",
    ],
    answer: "B",
  },
  {
    STT: "148",
    question: "Chủ thể nào không có quyền cấm tham gia hoạt động đấu thầu?",
    options: [
      "A. Người có thẩm quyền",
      "B. Chủ đầu tư",
      "C. Bộ trưởng, Thủ trưởng cơ quan ngang Bộ, cơ quan thuộc Chính phủ, cơ quan khác ở Trung ương",
      "D. Chủ tịch Ủy ban nhân dân cấp tỉnh",
    ],
    answer: "B",
  },
  {
    STT: "149",
    question:
      "Người có thẩm quyền ban hành quyết định cấm tham gia hoạt động đấu thầu với thời gian cấm bao lâu đối với trường hợp tổ chức, cá nhân có từ 02 hành vi vi phạm trở lên thuộc cùng phạm vi quản lý của người có thẩm quyền và các hành vi này chưa bị cấm tham gia hoạt động đấu thầu?",
    options: [
      "A. Bằng tổng thời gian cấm của các hành vi vi phạm nhưng tối thiểu trên 05 năm",
      "B. Bằng tổng thời gian cấm của các hành vi vi phạm nhưng tối đa không quá 03 năm",
      "C. Bằng tổng thời gian cấm của các hành vi vi phạm nhưng tối đa không quá 05 năm.",
      "D. Bằng thời gian cấm của hành vi vi phạm có thời gian bị cấm cao nhất",
    ],
    answer: "C",
  },
  {
    STT: "150",
    question:
      "Hành vi gian lận trong hoạt động đấu thầu sẽ bị cấm tham gia hoạt động đấu thầu trong thời gian bao lâu?",
    options: [
      "A. Từ 06 tháng đến 01 năm",
      "B. 02 năm",
      "C. Từ 01 năm đến 02 năm",
      "D. Từ 03 năm đến 05 năm.",
    ],
    answer: "D",
  },
  {
    STT: "151",
    question:
      "Hành vi cản trở trong hoạt động đấu thầu sẽ bị cấm tham gia hoạt động đấu thầu trong thời gian bao lâu?",
    options: [
      "A. 06 tháng",
      "B. Từ 06 tháng đến dưới 1 năm",
      "C. Từ 01 năm đến 03 năm.",
      "D. 05 năm",
    ],
    answer: "C",
  },
  {
    STT: "152",
    question:
      'Thành viên A trong nhà thầu liên danh A-B thực hiện hành vi "làm giả hoặc làm sai lệch thông tin, hồ sơ, tài liệu trong đấu thầu" thì việc cấm tham gia hoạt động đấu thầu được xử lý như thế nào?',
    options: [
      "A. Cấm tham gia hoạt động đấu thầu từ 03 năm đến 05 năm đối với thành viên A.",
      "B. Cấm tham gia hoạt động đấu thầu từ 01 năm đến dưới 03 năm đối với thành viên A",
      "C. Cấm tham gia hoạt động đấu thầu từ 03 năm đến 05 năm đối với tất cả thành viên trong nhà thầu liên danh A-B",
      "D. Cấm tham gia hoạt động đấu thầu từ 01 năm đến 03 năm đối với tất cả thành viên trong nhà thầu liên danh A-B",
    ],
    answer: "A",
  },
  {
    STT: "153",
    question:
      "Trường hợp nhà thầu có nhân sự (ký kết hợp đồng lao động với nhà thầu tại thời điểm nhân sự thực hiện hành vi vi phạm) bị cơ quan điều tra kết luận có hành vi vi phạm quy định về đấu thầu gây hậu quả nghiêm trọng theo quy định pháp luật về hình sự nhằm mục đích cho nhà thầu trúng thầu nhưng nhân sự của nhà thầu chưa bị Tòa án kết án hoặc nhà thầu chưa bị người có thẩm quyền ra quyết định cấm tham gia hoạt động đấu thầu thì tại thời điểm này nhà thầu có được tham dự thầu hay không?",
    options: [
      "A. Nhà thầu không được tham dự thầu",
      "B. Hồ sơ dự thầu, hồ sơ đề xuất của nhà thầu sẽ được mở nhưng không được xem xét, đánh giá",
      "C. Hồ sơ dự thầu, hồ sơ đề xuất của nhà thầu không được mở thầu và trả lại theo nguyên trạng",
      "D. Nhà thầu vẫn được tiếp tục tham dự thầu.",
    ],
    answer: "D",
  },
  {
    STT: "154",
    question:
      "Trường hợp nào là một trong những điều kiện để chủ đầu tư chấp thuận đề xuất của nhà thầu trong quá trình thực hiện hợp đồng về việc thay đổi các hàng hóa có phiên bản sản xuất, năm sản xuất mới hơn so với hàng hóa ghi trong hợp đồng?",
    options: [
      "A. Hàng hóa thay thế có tính năng kỹ thuật, cấu hình, thông số và các yêu cầu kỹ thuật khác tương đương hoặc tốt hơn hàng hóa ghi trong hợp đồng nhưng bắt buộc phải cùng hãng sản xuất và xuất xứ.",
      "B. Hàng hóa thay thế có tính năng kỹ thuật, cấu hình, thông số và các yêu cầu kỹ thuật khác tương đương hoặc tốt hơn hàng hóa ghi trong hợp đồng, phải cùng hãng sản xuất nhưng không bắt buộc cùng xuất xứ",
      "C. Hàng hóa thay thế có tính năng kỹ thuật, cấu hình, thông số và các yêu cầu kỹ thuật khác tương đương hoặc tốt hơn hàng hóa ghi trong hợp đồng, phải cùng xuất xứ nhưng không bắt buộc cùng hãng sản xuất",
      "D. Hàng hóa thay thế có tính năng kỹ thuật, cấu hình, thông số và các yêu cầu kỹ thuật khác tương đương hoặc tốt hơn hàng hóa ghi trong hợp đồng nhưng không bắt buộc cùng hãng sản xuất và cùng xuất xứ",
    ],
    answer: "A",
  },
  {
    STT: "155",
    question:
      "Đối với trường hợp hủy thầu thì phải thực hiện giải pháp nào sau đây?",
    options: [
      "A. Phải điều chỉnh thời gian bắt đầu tổ chức lựa chọn nhà thầu trong kế hoạch lựa chọn nhà thầu",
      "B. Phải điều chỉnh thời gian thực hiện gói thầu trong kế hoạch lựa chọn nhà thầu",
      "C. Không phải điều chỉnh thời gian bắt đầu tổ chức lựa chọn nhà thầu trong kế hoạch lựa chọn nhà thầu.",
      "D. Tất cả các đáp án trên đều không đúng",
    ],
    answer: "C",
  },
  {
    STT: "156",
    question: "Hủy thầu được thực hiện trong thời gian nào?",
    options: [
      "A. Từ ngày có thời điểm đóng thầu đến khi có kết quả lựa chọn nhà thầu",
      "B. Từ ngày phát hành hồ sơ mời sơ tuyển, hồ sơ mời quan tâm, hồ sơ mời thầu, hồ sơ yêu cầu đến trước khi ký kết hợp đồng, thỏa thuận khung đối với mua sắm tập trung.",
      "C. Từ ngày có thời điểm đóng thầu đến khi ký kết hợp đồng, thỏa thuận khung đối với mua sắm tập trung",
      "D. Từ ngày phát hành hồ sơ mời sơ tuyển, hồ sơ mời quan tâm, hồ sơ mời thầu, hồ sơ yêu cầu kể cả sau khi đã ký hợp đồng",
    ],
    answer: "B",
  },
  {
    STT: "157",
    question:
      "Đối với gói thầu xây lắp, dịch vụ phi tư vấn, dịch vụ tư vấn áp dụng đấu thầu trước quy định tại Điều 42 của Luật Đấu thầu, trường hợp dự án được phê duyệt có các nội dung dẫn đến tăng giá gói thầu từ 30% trở lên hoặc thay đổi tiêu chuẩn đánh giá quan trọng về kỹ thuật hoặc thay đổi cấp công trình quy định trong hồ sơ mời thầu đã phát hành thì chủ đầu tư xử lý như thế nào?",
    options: [
      "A. Tiếp tục đánh giá hồ sơ dự thầu trong trường hợp đã mở thầu",
      "B. Được sửa đổi và phát hành bổ sung hồ sơ mời thầu trong trường hợp chưa mở thầu",
      "C. Được sửa đổi, bổ sung khối lượng công việc, hoàn thiện để ký kết hợp đồng với nhà thầu",
      "D. Hủy thầu.",
    ],
    answer: "D",
  },
  {
    STT: "158",
    question:
      "Nhà thầu đã ký thỏa thuận khung và được đơn vị có nhu cầu mua sắm yêu cầu ký hợp đồng nhưng không ký hợp đồng, không thực hiện biện pháp bảo đảm thực hiện hợp đồng sẽ bị xử lý như thế nào?",
    options: [
      "A. Nhà thầu sẽ bị khóa tài khoản trên Hệ thống mạng đấu thầu quốc gia trong thời hạn 06 tháng kể từ ngày đơn vị có nhu cầu mua sắm công khai tên nhà thầu trên Hệ thống",
      "B. Nhà thầu sẽ bị khóa tài khoản trên Hệ thống mạng đấu thầu quốc gia trong thời hạn 06 tháng kể từ ngày đơn vị mua sắm tập trung công khai tên nhà thầu trên Hệ thống mạng đấu thầu quốc gia, trừ trường hợp bất khả kháng.",
      "C. Nhà thầu sẽ bị khóa tài khoản trong thời hạn 03 tháng kể từ ngày Bộ Tài chính nhận được văn bản đề nghị",
      "D. Nhà thầu sẽ bị khóa tài khoản trong thời hạn 06 tháng kể từ ngày Bộ Tài chính nhận được văn bản đề nghị",
    ],
    answer: "B",
  },
  {
    STT: "159",
    question:
      "Đối với các gói thầu mua sắm tập trung, trách nhiệm cung cấp thông tin về kết quả thực hiện hợp đồng của nhà thầu do ai thực hiện?",
    options: [
      "A. Đơn vị có nhu cầu mua sắm",
      "B. Bên mời thầu",
      "C. Đơn vị tư vấn được thuê làm bên mời thầu",
      "D. Không phải đăng tải thông tin",
    ],
    answer: "A",
  },
  {
    STT: "160",
    question: "Tài khoản nghiệp vụ trên Hệ thống mạng đấu thầu quốc gia là gì?",
    options: [
      "A. Tài khoản do người sử dụng đăng ký và được phê duyệt trên Hệ thống mạng đấu thầu quốc gia",
      "B. Tài khoản do Trung tâm Đấu thầu qua mạng quốc gia cấp phép theo quy định",
      "C. Tài khoản do Tài khoản tham gia hệ thống tạo ra",
      "D. Phương án A và B đều đúng",
    ],
    answer: "C",
  },
  {
    STT: "161",
    question:
      "Trong quá trình đánh giá, Tổ chuyên gia phát hiện nhà thầu tham dự thầu trên Hệ thống mạng đấu thầu quốc gia đính kèm tệp tin có thiết lập mật khẩu thì xử lý thế nào?",
    options: [
      "A. Yêu cầu nhà thầu nộp lại tệp tin không có thiết lập mật khẩu trên Hệ thống mạng đấu thầu quốc gia để xem xét, đánh giá",
      "B. Yêu cầu nhà thầu cung cấp mật khẩu để xem xét, đánh giá",
      "C. Tệp tin này không được xem xét, đánh giá",
      "D. Phương án A và B đều đúng",
    ],
    answer: "C",
  },
  {
    STT: "162",
    question:
      "Thành viên tổ chuyên gia cần có tối thiểu bao nhiêu năm kinh nghiệm trong lĩnh vực liên quan?",
    options: [
      "A. 01 năm công tác thuộc một trong các lĩnh vực liên quan đến nội dung pháp lý, kỹ thuật, tài chính của gói thầu",
      "B. 02 năm công tác thuộc một trong các lĩnh vực liên quan đến nội dung pháp lý, kỹ thuật, tài chính của gói thầu",
      "C. 03 năm công tác thuộc một trong các lĩnh vực liên quan đến nội dung pháp lý, kỹ thuật, tài chính của gói thầu",
      "D. Không có quy định về số năm kinh nghiệm",
    ],
    answer: "C",
  },
  {
    STT: "163",
    question:
      "Hiện nay, Việt Nam đã mở cửa thị trường mua sắm chính phủ (đấu thầu) trong những hiệp định nào?",
    options: [
      "A. Chỉ Hiệp định Đối tác Toàn diện và Tiến bộ Xuyên Thái Bình Dương (CPTPP)",
      "B. Hiệp định CPTPP và Hiệp định thương mại tự do giữa Cộng hòa xã hội chủ nghĩa Việt Nam và Liên minh Châu Âu (EVFTA)",
      "C. Hiệp định CPTPP, Hiệp định EVFTA và Hiệp định Thương mại Tự do giữa Việt Nam và Liên hiệp Vương quốc Anh và Bắc Ailen (UKVFTA)",
      "D. Tất cả các hiệp định mà Việt Nam là thành viên",
    ],
    answer: "C",
  },
  {
    STT: "164",
    question:
      "Số lượng các nước thành viên Hiệp định Đối tác Toàn diện và Tiến bộ Xuyên Thái Bình Dương (CPTPP) ký kết hiệp định ban đầu là bao nhiêu nước?",
    options: ["A. 8 nước", "B. 9 nước", "C. 11 nước", "D. 12 nước"],
    answer: "C",
  },
  {
    STT: "165",
    question:
      "Trong các hiệp định dưới đây, hiệp định nào không có quy định về các trường hợp chỉ định thầu?",
    options: [
      "A. Hiệp định Đối tác Toàn diện và Tiến bộ Xuyên Thái Bình Dương (CPTPP)",
      "B. Hiệp định thương mại tự do giữa Cộng hòa xã hội chủ nghĩa Việt Nam và Liên minh Châu Âu (EVFTA)",
      "C. Hiệp định EVFTA và Hiệp định Thương mại Tự do giữa Việt Nam và Liên hiệp Vương quốc Anh và Bắc Ailen (UKVFTA)",
      "D. Hiệp định Đối tác Kinh tế Toàn diện Khu vực (RCEP)",
    ],
    answer: "D",
  },
  {
    STT: "166",
    question:
      "Hoạt động nào sau đây không thuộc phạm vi điều chỉnh của Nghị định số 95/2020/NĐ-CP?",
    options: [
      "A. Mua sắm thiết bị văn phòng",
      "B. Thuê dịch vụ tư vấn",
      "C. Thuê quyền sử dụng đất",
      "D. Mua sắm vật tư y tế",
    ],
    answer: "C",
  },
  {
    STT: "167",
    question:
      "Theo các hiệp định mà Việt Nam có mở cửa thị trường mua sắm chính phủ (đấu thầu), nhà thầu nước ngoài được tham gia đấu thầu tại Việt Nam trong trường hợp nào?",
    options: [
      "A. Tất cả các gói thầu",
      "B. Chỉ gói thầu ODA",
      "C. Gói thầu thuộc phạm vi điều chỉnh của hiệp định",
      "D. Gói thầu có giá trị lớn, phức tạp",
    ],
    answer: "C",
  },
  {
    STT: "168",
    question:
      "Theo quy định tại Nghị định số 95/2020/NĐ-CP, đấu thầu nội khối là?",
    options: [
      "A. Đấu thầu mà chỉ có nhà thầu nội khối được tham dự",
      "B. Đấu thầu cho các dự án trong khối CPTPP",
      "C. Đấu thầu giữa các nước thành viên EVFTA, UKVFTA",
      "D. Đấu thầu trong nước",
    ],
    answer: "A",
  },
  {
    STT: "169",
    question:
      "Theo quy định tại Nghị định số 09/2022/NĐ-CP, cơ quan mua sắm phải tổ chức đấu thầu nội khối, trừ trường hợp nào?",
    options: [
      "A. Không có nhà thầu trong nước tham gia",
      "B. Giá gói thầu quá lớn",
      "C. Người có thẩm quyền xét thấy cần tổ chức đấu thầu quốc tế để mang lại hiệu quả cao hơn cho dự án, gói thầu",
      "D. Hàng hóa thuộc gói thầu quá phức tạp mà nhà thầu trong nước không đáp ứng được",
    ],
    answer: "C",
  },
  {
    STT: "170",
    question:
      "Đối với đấu thầu qua mạng, trường hợp Hệ thống gặp sự cố thì trường hợp nào được Hệ thống tự động gia hạn thời điểm đóng thầu?",
    options: [
      "A. Các gói thầu có thời điểm đóng thầu, thời điểm kết thúc chào giá trực tuyến trong thời gian từ khi Hệ thống gặp sự cố cho đến thời điểm sau hoàn thành khắc phục sự cố 02 giờ",
      "B. Các gói thầu có thời điểm đóng thầu, thời điểm kết thúc chào giá trực tuyến, thời điểm đăng tải kết quả lựa chọn nhà thầu trong thời gian từ khi Hệ thống gặp sự cố cho đến thời điểm sau hoàn thành khắc phục sự cố 02 giờ",
      "C. Các gói thầu có thời điểm đóng thầu trong thời gian từ khi Hệ thống gặp sự cố cho đến thời điểm sau hoàn thành khắc phục sự cố 04 giờ",
      "D. Các đáp án trên đều sai",
    ],
    answer: "A",
  },
  {
    STT: "171",
    question:
      "Đối với việc giải quyết kiến nghị về các vấn đề trước khi có thông báo kết quả lựa chọn nhà thầu, cá nhân, đơn vị nào sau đây có trách nhiệm giải quyết kiến nghị?",
    options: [
      "A. Chủ đầu tư, người có thẩm quyền",
      "B. Chủ đầu tư, Hội đồng giải quyết kiến nghị",
      "C. Người có thẩm quyền, Hội đồng giải quyết kiến nghị",
      "D. Chủ đầu tư, tổ chuyên gia",
    ],
    answer: "A",
  },
  {
    STT: "172",
    question:
      "Đối với việc giải quyết kiến nghị về kết quả lựa chọn nhà thầu, cá nhân, đơn vị nào sau đây có trách nhiệm giải quyết kiến nghị?",
    options: [
      "A. Chủ đầu tư, người có thẩm quyền",
      "B. Chủ đầu tư, Hội đồng giải quyết kiến nghị",
      "C. Người có thẩm quyền, Hội đồng giải quyết kiến nghị",
      "D. Chủ đầu tư, tổ chuyên gia",
    ],
    answer: "B",
  },
  {
    STT: "173",
    question:
      "Trường hợp đang trong quá trình giải quyết kiến nghị mà nhà thầu gửi đơn khiếu nại thì việc giải quyết kiến nghị được xử lý thế nào?",
    options: [
      "A. Tiếp tục giải quyết kiến nghị",
      "B. Chấm dứt ngay việc giải quyết kiến nghị",
      "C. Tạm dừng việc giải quyết kiến nghị đến khi có kết quả giải quyết khiếu nại",
      "D. Tất cả phương án trên đều sai",
    ],
    answer: "B",
  },
  {
    STT: "174",
    question:
      "Đơn vị sự nghiệp công lập (tự chủ chi thường xuyên và chi đầu tư) thuộc tỉnh B tổ chức đấu thầu cho dự án sử dụng vốn ngân sách nhà nước thì Giám đốc Sở Tài chính Tỉnh B có trách nhiệm thành lập Hội đồng giải quyết kiến nghị cho gói thầu có kiến nghị tại Dự án này hay không?",
    options: [
      "A. Có trách nhiệm thành lập",
      "B. Không có trách nhiệm thành lập",
      "C. Thành lập khi chủ tịch UBND tỉnh yêu cầu",
      "D. Thành lập khi Giám đốc doanh nghiệp A đề nghị",
    ],
    answer: "A",
  },
  {
    STT: "175",
    question:
      "Chi phí giải quyết kiến nghị được nhà thầu nộp cho chủ thể nào sau đây?",
    options: [
      "A. Chủ tịch Hội đồng tư vấn giải quyết kiến nghị",
      "B. Bộ phận thường trực giúp việc cho Chủ tịch Hội đồng giải quyết kiến nghị.",
      "C. Chủ đầu tư",
      "D. Người có thẩm quyền",
    ],
    answer: "B",
  },
  {
    STT: "176",
    question:
      "Đối với kiến nghị về kết quả lựa chọn nhà thầu, Hội đồng giải quyết kiến nghị phải có văn bản giải quyết kiến nghị trong thời hạn bao nhiêu ngày kể từ ngày Hội đồng được thành lập?",
    options: ["A. 25 ngày", "B. 30 ngày", "C. 35 ngày", "D. 20 ngày"],
    answer: "B",
  },
  {
    STT: "177",
    question:
      "Các trường hợp nào sau đây nhà thầu không được hoàn trả chi phí giải quyết kiến nghị?",
    options: [
      "A. Kiến nghị của nhà thầu được kết luận là đúng",
      "B. Một hoặc các nội dung kiến nghị của nhà thầu được kết luận là không đúng",
      "C. Nhà thầu rút đơn kiến nghị trong quá trình giải quyết kiến nghị",
      "D. Phương án B và C đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "178",
    question:
      "Phương án nào sau đây là đúng trong việc giải quyết kiến nghị đối với gói thầu sử dụng vốn sản xuất kinh doanh của doanh nghiệp nhà nước?",
    options: [
      "A. Hội đồng giải quyết kiến nghị do Sở Tài chính thành lập có trách nhiệm giải quyết kiến nghị cho gói thầu",
      "B. Hội đồng giải quyết kiến nghị do Bộ trưởng Bộ Tài chính thành lập có trách nhiệm giải quyết kiến nghị cho gói thầu",
      "C. Người đứng đầu doanh nghiệp nhà nước tự ban hành điều kiện, quy trình về giải quyết kiến nghị trong đơn vị mình",
      "D. Tất cả phương án A, B, C đều sai",
    ],
    answer: "C",
  },
  {
    STT: "179",
    question:
      "Hội đồng giải quyết kiến nghị có quyền thực hiện việc nào sau đây?",
    options: [
      "A. Hủy thầu",
      "B. Yêu cầu chủ đầu tư tạm dừng, ký kết hợp đồng",
      "C. Yêu cầu nhà thầu, chủ đầu tư và các cơ quan liên quan cung cấp thông tin của gói thầu, dự án và các thông tin liên quan khác để thực hiện nhiệm vụ",
      "D. Không công nhận kết quả lựa chọn nhà thầu",
    ],
    answer: "C",
  },
  {
    STT: "180",
    question:
      "Đối với gói thầu chia phần, chủ đầu tư có thể phê duyệt kết quả lựa chọn nhà thầu cho từng phần hay không?",
    options: [
      "A. Không thể",
      "B. Có thể nhưng phải bảo đảm điều kiện giá đề nghị trúng thầu không vượt giá gói thầu",
      "C. Có thể nhưng phải bảo đảm tỷ lệ tiết kiệm tối thiểu 5%",
      "D. Có thể nhưng phải bảo đảm điều kiện giá đề nghị trúng thầu không vượt giá của phần đó trong giá gói thầu.",
    ],
    answer: "D",
  },
  {
    STT: "181",
    question:
      "Đối với gói thầu chia phần, trường hợp một phần của gói thầu không có nhà thầu tham dự thầu thì chủ đầu tư xử lý thế nào?",
    options: [
      "A. Tách phần đó ra thành gói thầu riêng biệt để tổ chức lựa chọn nhà thầu theo quy định",
      "B. Hủy thầu",
      "C. Đàm phán với nhà thầu trúng thầu của phần khác để thực hiện",
      "D. Phương án B và C đều đúng",
    ],
    answer: "A",
  },
  {
    STT: "182",
    question:
      "Đối với kiến nghị về các vấn đề trước khi có thông báo kết quả lựa chọn nhà thầu, trường hợp nhà thầu gửi đơn kiến nghị đồng thời đến người có thẩm quyền và chủ đầu tư thì chủ thể nào có trách nhiệm giải quyết kiến nghị?",
    options: [
      "A. Người có thẩm quyền",
      "B. Chủ đầu tư",
      "C. Bộ phận thường trực",
      "D. Hội đồng giải quyết kiến nghị",
    ],
    answer: "B",
  },
  {
    STT: "183",
    question:
      "Đối với kiến nghị về kết quả lựa chọn nhà thầu, trường hợp nhà thầu gửi đơn kiến nghị đồng thời đến bộ phận thường trực và chủ đầu tư thì chủ thể nào có trách nhiệm giải quyết kiến nghị?",
    options: [
      "A. Người có thẩm quyền",
      "B. Chủ đầu tư",
      "C. Bộ phận thường trực",
      "D. Hội đồng giải quyết kiến nghị.",
    ],
    answer: "D",
  },
  {
    STT: "184",
    question:
      "Theo quy định pháp luật về đấu thầu, kiểm tra hoạt động đấu thầu được tiến hành theo hình thức nào?",
    options: [
      "A. Kiểm tra trực tiếp",
      "B. Báo cáo bằng văn bản",
      "C. Kết hợp giữa kiểm tra trực tiếp và báo cáo bằng văn bản",
      "D. Kiểm tra định kỳ hoặc đột xuất.",
    ],
    answer: "D",
  },
  {
    STT: "185",
    question: "Thẩm quyền xử lý tình huống phức tạp trong đấu thầu?",
    options: [
      "A. Chủ đầu tư quyết định xử lý tình huống sau khi có ý kiến của người có thẩm quyền.",
      "B. Người có thẩm quyền quyết định xử lý tình huống sau khi có ý kiến của Tổ chuyên gia",
      "C. Người có thẩm quyền quyết định xử lý tình huống sau khi có ý kiến của chủ đầu tư",
      "D. Người có thẩm quyền quyết định xử lý tình huống sau khi có ý kiến của chủ đầu tư và Tổ chuyên gia",
    ],
    answer: "A",
  },
  {
    STT: "186",
    question:
      "Trường hợp nào dưới đây, chủ đầu tư và nhà thầu liên danh được thỏa thuận điều chỉnh phạm vi công việc giữa các thành viên liên danh?",
    options: [
      "A. Khi một thành viên liên danh không muốn tiếp tục thực hiện phần việc đã cam kết",
      "B. Khi chủ đầu tư thấy một thành viên trong liên danh thực hiện tốt nên muốn điều chuyển toàn bộ phần việc cho thành viên liên danh đó",
      "C. Khi cần đẩy nhanh tiến độ thực hiện hợp đồng hoặc do điều kiện khách quan không phải lỗi của nhà thầu làm ảnh hưởng tiến độ.",
      "D. Khi một thành viên liên danh đề nghị chuyển nhượng phần việc để tiết kiệm chi phí",
    ],
    answer: "C",
  },
  {
    STT: "187",
    question: "Đình chỉ cuộc thầu được thực hiện trong thời gian nào?",
    options: [
      "A. Từ ngày phát hành HSMT/HSYC đến trước khi ký kết hợp đồng, thỏa thuận khung đối với mua sắm tập trung",
      "B. Trong quá trình tổ chức lựa chọn nhà thầu cho đến trước khi phê duyệt kết quả lựa chọn nhà thầu.",
      "C. Sau khi phê duyệt kết quả lựa chọn nhà thầu đến khi ký kết hợp đồng, thỏa thuận khung",
      "D. Trong quá trình thực hiện hợp đồng",
    ],
    answer: "B",
  },
  {
    STT: "188",
    question:
      "Thẩm quyền phê duyệt kế hoạch tổng thể lựa chọn nhà thầu thuộc chủ thể nào?",
    options: [
      "A. Người có thẩm quyền",
      "B. Chủ đầu tư (trường hợp xác định được chủ đầu tư)",
      "C. Người đứng đầu cơ quan được giao chuẩn bị dự án",
      "D. Bên mời thầu",
    ],
    answer: "A",
  },
  {
    STT: "189",
    question:
      "Nhiệm vụ nào sau đây không thuộc trách nhiệm của người có thẩm quyền?",
    options: [
      "A. Phê duyệt kế hoạch lựa chọn nhà thầu",
      "B. Giải quyết kiến nghị và xử lý các vi phạm pháp luật về đấu thầu",
      "C. Quyết định việc hủy thầu khi thay đổi mục tiêu đầu tư trong quyết định đầu tư",
      "D. Quyết định việc hủy thầu, đình chỉ cuộc đấu thầu, không công nhận kết quả lựa chọn nhà thầu khi có vi phạm",
    ],
    answer: "A",
  },
  {
    STT: "190",
    question:
      "Danh mục hàng hóa, dịch vụ áp dụng mua sắm tập trung do Bộ trưởng Bộ Y tế ban hành:",
    options: [
      "A. Danh mục mua sắm tập trung cấp quốc gia đối với ô tô trong trường hợp cần thiết",
      "B. Danh mục MSTT cấp quốc gia đối với thuốc; thiết bị CNTT trong trường hợp cần thiết",
      "C. Danh mục MSTT cấp quốc gia đối với thuốc; dịch vụ đơn giản trong trường hợp cần thiết",
      "D. Danh mục mua sắm tập trung cấp quốc gia đối với thuốc; thiết bị y tế, vật tư xét nghiệm trong trường hợp cần thiết",
    ],
    answer: "D",
  },
  {
    STT: "191",
    question: "Đơn vị mua sắm tập trung:",
    options: [
      "A. Thực hiện việc lựa chọn nhà thầu trên cơ sở nhiệm vụ được giao",
      "B. Thực hiện việc lựa chọn nhà thầu trên cơ sở hợp đồng ký với các đơn vị có nhu cầu",
      "C. Thực hiện việc lựa chọn nhà thầu trên cơ sở nhiệm vụ được giao hoặc hợp đồng ký với các đơn vị có nhu cầu.",
      "D. Không được thực hiện việc lựa chọn nhà thầu",
    ],
    answer: "C",
  },
  {
    STT: "192",
    question: "Trách nhiệm trong mua sắm tập trung:",
    options: [
      "A. Đơn vị mua sắm tập trung thực hiện trách nhiệm của người có thẩm quyền theo quy định của Luật Đấu thầu",
      "B. Đơn vị mua sắm tập trung thực hiện trách nhiệm của chủ đầu tư quy định của Luật Đấu thầu.",
      "C. Đơn vị mua sắm tập trung thực hiện trách nhiệm của bên mời thầu quy định của Luật Đấu thầu",
      "D. Đơn vị mua sắm tập trung thực hiện trách nhiệm của tổ chuyên gia theo quy định của Luật Đấu thầu",
    ],
    answer: "B",
  },
  {
    STT: "193",
    question:
      "Đối với gói thầu mua sắm tập trung áp dụng lựa chọn nhà thầu căn cứ theo khả năng cung cấp và áp dụng phương pháp giá thấp nhất, việc lựa chọn danh sách nhà thầu trúng thầu được thực hiện như thế nào?",
    options: [
      "A. Đảm bảo tổng số lượng hàng hóa chào thầu tối thiểu bằng số lượng trong HSMT, đồng thời tổng giá đề nghị trúng thầu tốt nhất",
      "B. Đảm bảo tổng số lượng hàng hóa chào thầu bằng số lượng trong HSMT, đồng thời tổng giá đề nghị trúng thầu cao nhất",
      "C. Đảm bảo tổng số lượng hàng hóa chào thầu tối thiểu bằng số lượng trong HSMT, đồng thời tổng giá đề nghị trúng thầu thấp nhất.",
      "D. Đảm bảo tổng số lượng hàng hóa chào thầu bằng số lượng trong HSMT, đồng thời tổng giá đánh giá thấp nhất",
    ],
    answer: "C",
  },
  {
    STT: "194",
    question:
      "Đối với gói thầu mua sắm tập trung áp dụng lựa chọn nhà thầu căn cứ khối lượng mời thầu, danh sách phê duyệt nhà thầu trúng thầu bao gồm:",
    options: [
      "A. Danh sách chính (nhà thầu xếp thứ nhất) và danh sách dự bị (nhà thầu xếp thứ 2 trở đi).",
      "B. Danh sách chính (nhà thầu xếp thứ nhất) và danh sách nhà thầu không đáp ứng yêu cầu của HSMT",
      "C. Danh sách các nhà thầu đáp ứng yêu cầu về năng lực và kinh nghiệm theo yêu cầu của HSMT",
      "D. Danh sách chính (nhà thầu xếp thứ nhất và thứ 2) và danh sách dự bị (nhà thầu xếp thứ 3 trở đi)",
    ],
    answer: "A",
  },
  {
    STT: "195",
    question: "Thời gian có hiệu lực thi hành của Luật số 90/2025/QH15?",
    options: [
      "A. Từ ngày 01 tháng 7 năm 2025",
      "B. Từ ngày 04 tháng 8 năm 2025",
      "C. Từ ngày 08 tháng 8 năm 2025",
      "D. Tất cả các đáp án trên đều sai",
    ],
    answer: "A",
  },
  {
    STT: "196",
    question:
      "Đối với hàng hóa, dịch vụ không thuộc danh mục MSTT của tỉnh X nhưng nhiều đơn vị trong tỉnh có nhu cầu mua sắm cùng loại thì thực hiện như thế nào?",
    options: [
      "A. Từng đơn vị căn cứ vào thỏa thuận khung đã ký trước đó để mua sắm",
      "B. Có thể gộp thành một gói thầu để một đơn vị mua sắm hoặc để đơn vị MSTT thực hiện việc mua sắm.",
      "C. Sở Tài chính tỉnh X có trách nhiệm thực hiện mua sắm tập trung",
      "D. Các đơn vị báo cáo người có thẩm quyền phê duyệt kế hoạch LCNT theo hình thức MSTT",
    ],
    answer: "B",
  },
  {
    STT: "197",
    question:
      "Việc chấp thuận/không chấp thuận điều chuyển khối lượng của nhà thầu phụ cho đơn vị khác khi cần đáp ứng tiến độ, chất lượng do nhà thầu chính đề xuất thuộc trách nhiệm của ai?",
    options: [
      "A. Tổ chuyên gia",
      "B. Chủ đầu tư",
      "C. Người có thẩm quyền",
      "D. Tổ thẩm định",
    ],
    answer: "B",
  },
  {
    STT: "198",
    question:
      "Đối với kiến nghị về quá trình tổ chức lựa chọn nhà thầu (không phải kiến nghị về nội dung HSMT), đơn kiến nghị phải là của chủ thể nào?",
    options: [
      "A. Cá nhân quan tâm đến gói thầu",
      "B. Nhà thầu tham dự thầu",
      "C. Cơ quan, tổ chức quan tâm đến gói thầu",
      "D. Phương án B và C đều đúng",
    ],
    answer: "B",
  },
  {
    STT: "199",
    question:
      "Các tài liệu, thông tin nào sau đây trong việc giải quyết kiến nghị được công khai trên Hệ thống mạng đấu thầu quốc gia?",
    options: [
      "A. Nội dung kiến nghị kết quả lựa chọn nhà thầu",
      "B. Văn bản giải quyết kiến nghị của chủ đầu tư",
      "C. Văn bản giải quyết kiến nghị của người có thẩm quyền",
      "D. Tất cả phương án trên đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "200",
    question:
      "Nhà thầu có trách nhiệm nộp chi phí giải quyết kiến nghị trong thời hạn bao lâu kể từ ngày nhận được thông báo của bộ phận thường trực?",
    options: [
      "A. 03 ngày làm việc",
      "B. 02 ngày làm việc ",
      "C. 04 ngày làm việc",
      "D. 05 ngày làm việc",
    ],
    answer: "B",
  },
  {
    STT: "1",
    question:
      "Trường hợp gói thầu có tính chất đặc thù và áp dụng hình thức chỉ định thầu hoặc lựa chọn nhà thầu trong trường hợp đặc biệt, nhà thầu nước ngoài có yêu cầu ràng buộc chỉ ký hợp đồng khi không phải đăng ký trên Hệ thống mạng đấu thầu quốc gia thì chủ đầu tư xử lý như thế nào?",
    options: [
      "A. Không cần yêu cầu nhà thầu nước ngoài đăng ký khi đăng tải kết quả lựa chọn nhà thầu",
      "B. Yêu cầu nhà thầu nước ngoài đăng ký khi đăng tải kết quả lựa chọn nhà thầu",
      "C. Nhà thầu không được chấp nhận và bị loại",
      "D. Hủy thầu",
    ],
    answer: "A",
  },
  {
    STT: "2",
    question:
      "Đối với trường hợp hủy thầu thì phải thực hiện giải pháp nào sau đây?",
    options: [
      "A. Phải điều chỉnh thời gian bắt đầu tổ chức lựa chọn nhà thầu trong kế hoạch lựa chọn nhà thầu",
      "B. Phải điều chỉnh thời gian thực hiện gói thầu trong kế hoạch lựa chọn nhà thầu",
      "C. Không phải điều chỉnh thời gian bắt đầu tổ chức lựa chọn nhà thầu trong kế hoạch lựa chọn nhà thầu",
      "D. Tất cả các đáp án trên đều không đúng",
    ],
    answer: "C",
  },
  {
    STT: "3",
    question: "Hủy thầu được thực hiện trong thời gian nào?",
    options: [
      "A. Từ ngày có thời điểm đóng thầu đến khi có kết quả lựa chọn nhà thầu",
      "B. Từ ngày phát hành hồ sơ mời sơ tuyển, hồ sơ mời quan tâm, hồ sơ mời thầu, hồ sơ yêu cầu đến trước khi ký kết hợp đồng, thỏa thuận khung đối với mua sắm tập trung",
      "C. Từ ngày có thời điểm đóng thầu đến khi ký kết hợp đồng, thỏa thuận khung đối với mua sắm tập trung",
      "D. Từ ngày phát hành hồ sơ mời sơ tuyển, hồ sơ mời quan tâm, hồ sơ mời thầu, hồ sơ yêu cầu kể cả sau khi đã ký hợp đồng",
    ],
    answer: "B",
  },
  {
    STT: "4",
    question:
      "Đối với gói thầu tổ chức lựa chọn nhà thầu qua mạng, trường hợp trong quá trình đánh giá E-HSDT mà chưa có kết quả lựa chọn nhà thầu, nhà thầu có tên trong biên bản mở thầu bị khóa tài khoản theo quy định của pháp luật về đấu thầu thì chủ đầu tư xử lý như thế nào?",
    options: [
      "A. Yêu cầu nhà thầu thực hiện các thủ tục để mở khóa tài khoản làm cơ sở xem xét, đánh giá E-HSDT của nhà thầu",
      "B. Tiếp tục xem xét, đánh giá E-HSDT của nhà thầu",
      "C. Không tiếp tục xem xét, đánh giá E-HSDT của nhà thầu",
      "D. Tiếp tục xem xét, đánh giá E-HSDT của nhà thầu và yêu cầu nhà thầu thực hiện các thủ tục để mở khóa tài khoản trước khi phê duyệt kết quả lựa chọn nhà thầu",
    ],
    answer: "C",
  },
  {
    STT: "5",
    question:
      "Đối với gói thầu xây lắp, dịch vụ phi tư vấn, dịch vụ tư vấn áp dụng đấu thầu trước quy định tại Điều 42 của Luật Đấu thầu, trường hợp dự án được phê duyệt có các nội dung dẫn đến tăng giá gói thầu từ 30% trở lên hoặc thay đổi tiêu chuẩn đánh giá quan trọng về kỹ thuật hoặc thay đổi cấp công trình quy định trong hồ sơ mời thầu đã phát hành thì chủ đầu tư xử lý như thế nào?",
    options: [
      "A. Tiếp tục đánh giá hồ sơ dự thầu trong trường hợp đã mở thầu",
      "B. Được sửa đổi và phát hành bổ sung hồ sơ mời thầu trong trường hợp chưa mở thầu",
      "C. Được sửa đổi, bổ sung khối lượng công việc, hoàn thiện để ký kết hợp đồng với nhà thầu",
      "D. Hủy thầu",
    ],
    answer: "D",
  },
  {
    STT: "6",
    question:
      "Trường hợp nhà thầu trúng thầu không tiến hành hoàn thiện, ký kết hợp đồng hoặc tại thời điểm ký kết hợp đồng, nhà thầu trúng thầu không đáp ứng yêu cầu về năng lực kỹ thuật, tài chính quy định tại khoản 2 Điều 66 của Luật Đấu thầu thì chủ đầu tư xử lý như thế nào trong trường hợp này?",
    options: [
      "A. Hủy quyết định phê duyệt kết quả lựa chọn nhà thầu trúng thầu",
      "B. Hủy thầu",
      "C. Không công nhận kết quả lựa chọn nhà thầu",
      "D. Đình chỉ cuộc thầu",
    ],
    answer: "B",
  },
  {
    STT: "7",
    question:
      "Trường hợp nào sau đây, chủ đầu tư và nhà thầu liên danh được thỏa thuận điều chỉnh phạm vi công việc giữa các thành viên liên danh?",
    options: [
      "A. Khi một thành viên liên danh không muốn tiếp tục thực hiện phần việc đã cam kết",
      "B. Khi chủ đầu tư thấy một thành viên trong liên danh thực hiện tốt nên muốn điều chuyển toàn bộ phần việc cho thành viên liên danh đó",
      "C. Khi cần đẩy nhanh tiến độ thực hiện hợp đồng hoặc do điều kiện khách quan không phải lỗi của nhà thầu làm ảnh hưởng tiến độ",
      "D. Khi một thành viên liên danh đề nghị chuyển nhượng phần việc để tiết kiệm chi phí",
    ],
    answer: "C",
  },
  {
    STT: "8",
    question:
      "Gói thầu EC có giá dự thầu sau sửa lỗi, hiệu chỉnh sai lệch, trừ đi giá trị giảm giá bằng 85% giá gói thầu thì chủ đầu tư có thể quy định giá trị bảo đảm thực hiện hợp đồng ở mức 15% hay không?",
    options: [
      "A. Không được quy định",
      "B. Có thể quy định nhưng phải được sự đồng ý của nhà thầu",
      "C. Chủ đầu tư quyết định để ngừa rủi ro cho quá trình thực hiện",
      "D. Có thể quy định nhưng phải được người có thẩm quyền chấp thuận",
    ],
    answer: "A",
  },
  {
    STT: "9",
    question:
      "Đối với gói thầu hỗn hợp có yêu cầu đặc thù về kỹ thuật chỉ có một số nhà thầu đáp ứng yêu cầu của gói thầu áp dụng bước thương thảo hợp đồng, trường hợp nhà thầu xếp hạng thứ nhất không tiến hành thương thảo, không ký biên bản thương thảo, thương thảo không thành công thì chủ đầu tư thực hiện bước tiếp theo như thế nào?",
    options: [
      "A. Mời nhà thầu xếp hạng tiếp theo vào thương thảo hợp đồng",
      "B. Hủy thầu",
      "C. Cho phép các nhà thầu còn lại chào lại giá dự thầu",
      "D. Mời nhà thầu xếp hạng tiếp theo vào hoàn thiện hợp đồng",
    ],
    answer: "A",
  },
  {
    STT: "10",
    question:
      "Đối với gói thầu xây lắp áp dụng đấu thầu quốc tế, trường hợp nhà thầu xếp thứ nhất có hồ sơ dự thầu không cân bằng (đơn giá chào cao/thấp bất thường ở các hạng mục khác nhau) thì chủ đầu tư có thể xử lý thế nào?",
    options: [
      "A. Yêu cầu nhà thầu làm rõ bằng văn bản về các chi phí cấu thành giá dự thầu",
      "B. Có thể quy định giá trị bảo đảm thực hiện hợp đồng lớn hơn 10% nhưng không quá 30% giá hợp đồng để đề phòng rủi ro",
      "C. Mời nhà thầu chào lại giá",
      "D. Phương án A và B đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "11",
    question:
      "Trường hợp xí nghiệp X được tách ra khỏi pháp nhân theo quy định của pháp luật về dân sự thì nhà thầu tiếp nhận xí nghiệp X có được kế thừa năng lực, kinh nghiệm của xí nghiệp hay không?",
    options: [
      "A. Không được kế thừa năng lực, kinh nghiệm của xí nghiệp X",
      "B. Được kế thừa năng lực, kinh nghiệm của xí nghiệp X",
      "C. Chỉ được kế thừa về kinh nghiệm của xí nghiệp X",
      "D. Chỉ được kế thừa về năng lực của xí nghiệp X",
    ],
    answer: "B",
  },
  {
    STT: "211",
    question:
      "Trong quá trình thực hiện hợp đồng của nhà thầu liên danh A-B, nhà thầu B không còn năng lực để tiếp tục thực hiện hợp đồng, làm ảnh hưởng nghiêm trọng đến tiến độ, chất lượng, hiệu quả của gói thầu. Trong trường hợp này, bảo đảm thực hiện hợp đồng của nhà thầu xử lý như thế nào?",
    options: [
      "A. Không tịch thu giá trị bảo đảm thực hiện hợp đồng của nhà thầu A-B",
      "B. Tịch thu giá trị bảo đảm thực hiện hợp đồng của tất cả thành viên liên danh trong trường hợp phần công việc còn lại của các thành viên liên danh vi phạm hợp đồng được tách thành gói thầu riêng để lựa chọn nhà thầu",
      "C. Chỉ tịch thu giá trị bảo đảm thực hiện hợp đồng của nhà thầu B nếu nhà thầu A có đủ năng lực, kinh nghiệm đảm nhận phần công việc còn lại của nhà thầu B",
      "D. Phương án B và C đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "212",
    question:
      "Đối với gói thầu mua sắm thiết bị y tế, tổ chức đấu thầu rộng rãi qua mạng gói thầu mua sắm thiết bị y tế, trường hợp nhà thầu dự thầu không đề xuất cụ thể ký mã hiệu, nhãn hiệu, xuất xứ, hãng sản xuất thì xử lý như thế nào?",
    options: [
      "A. Chủ đầu tư yêu cầu nhà thầu bổ sung, làm rõ E-HSDT",
      "B. Chủ đầu tư tiếp tục đánh giá E-HSDT, trường hợp nhà thầu xếp thứ nhất thì yêu cầu nhà thầu bổ sung thông tin để hoàn thiện hợp đồng",
      "C. E-HSDT của nhà thầu bị đánh giá không đáp ứng và bị loại",
      "D. Xin ý kiến người có thẩm quyền để xử lý tình huống trong đấu thầu",
    ],
    answer: "C",
  },
  {
    STT: "213",
    question:
      "Nhận định nào sau đây đúng về văn bản điện tử trên Hệ thống mạng đấu thầu quốc gia?",
    options: [
      "A. Văn bản điện tử trên Hệ thống có giá trị theo quy định của pháp luật về giao dịch điện tử, làm cơ sở đối chiếu, so sánh, xác thực thông tin phục vụ công tác đánh giá, thẩm định, thanh tra, kiểm tra, kiểm toán và giải ngân",
      "B. Thời điểm gửi, nhận văn bản điện tử được xác định căn cứ theo thời gian thực ghi lại trên Hệ thống",
      "C. Khi gửi hồ sơ thanh quyết toán đến Kho bạc Nhà nước, nhà thầu không phải cung cấp thông tin, tài liệu cho Kho bạc Nhà nước đối với các thông tin, tài liệu là văn bản điện tử trên Hệ thống",
      "D. Cả 3 phương án trên đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "214",
    question: "Tài khoản nghiệp vụ trên Hệ thống mạng đấu thầu quốc gia là gì?",
    options: [
      "A. Tài khoản do người sử dụng đăng ký và được phê duyệt trên Hệ thống mạng đấu thầu quốc gia",
      "B. Tài khoản do Trung tâm Đấu thầu qua mạng quốc gia cấp phép theo quy định",
      "C. Tài khoản do Tài khoản tham gia hệ thống tạo ra",
      "D. Phương án A và B đều đúng",
    ],
    answer: "C",
  },
  {
    STT: "215",
    question:
      "Nhà thầu có trách nhiệm kê khai thông tin nào trên Hệ thống mạng đấu thầu quốc gia?",
    options: [
      "A. Thông tin về uy tín của nhà thầu trong việc tham dự thầu",
      "B. Thông tin về vi phạm của nhà thầu",
      "C. Thông tin về năng lực, kinh nghiệm của nhà thầu",
      "D. Cả 3 phương án trên đều đúng",
    ],
    answer: "C",
  },
  {
    STT: "216",
    question:
      "Ai chịu trách nhiệm đăng tải thông tin chủ yếu của hợp đồng trên Hệ thống mạng đấu thầu quốc gia?",
    options: [
      "A. Bên mời thầu",
      "B. Tổ chuyên gia",
      "C. Tư vấn đấu thầu",
      "D. Chủ đầu tư",
    ],
    answer: "D",
  },
  {
    STT: "217",
    question:
      "Trong đấu thầu qua mạng, nhà thầu tư vấn đấu thầu bị khoá tài khoản trong vòng 06 tháng khi thực hiện hành vi nào sau đây?",
    options: [
      "A. Tham gia vào quá trình lập và đánh giá E-HSMT",
      "B. Tham gia vào quá trình thẩm định hồ sơ mời thầu và kết quả lựa chọn nhà thầu",
      "C. Thay chủ đầu tư đăng tải các nội dung thuộc trách nhiệm đăng tải của chủ đầu tư",
      "D. Đăng tải thông tin về năng lực, kinh nghiệm của mình trên Hệ thống mạng đấu thầu quốc gia",
    ],
    answer: "C",
  },
  {
    STT: "218",
    question:
      "Chủ đầu tư có trách nhiệm đăng tải thông tin chủ yếu của hợp đồng trên Hệ thống đấu thầu qua mạng quốc gia chậm nhất là?",
    options: [
      "A. 05 ngày làm việc kể từ ngày ký kết hợp đồng",
      "B. 05 ngày làm việc kể từ ngày hợp đồng có hiệu lực",
      "C. 05 ngày kể từ ngày hợp đồng có hiệu lực",
      "D. 05 ngày làm việc kể từ ngày nhà thầu nộp bảo đảm thực hiện hợp đồng",
    ],
    answer: "B",
  },
  {
    STT: "219",
    question:
      "Danh sách nhà thầu có hành vi vi phạm và bị đánh giá về uy tín được đăng tải trên Hệ thống mạng đấu thầu quốc gia như thế nào?",
    options: [
      "A. Tổ chuyên gia đăng tải trong thời hạn 03 ngày làm việc kể từ ngày nhà thầu có hành vi vi phạm",
      "B. Bên mời thầu đăng tải trong thời hạn 05 ngày làm việc kể từ ngày nhà thầu có hành vi vi phạm",
      "C. Chủ đầu tư đăng tải trong thời hạn 07 ngày làm việc kể từ ngày nhà thầu có hành vi vi phạm",
      "D. Người có thẩm quyền đăng tải trong thời hạn 05 ngày làm việc kể từ ngày nhà thầu có hành vi vi phạm",
    ],
    answer: "C",
  },
  {
    STT: "220",
    question:
      "Chủ thể nào sau đây được gia hạn thời điểm đóng thầu trên Hệ thống mạng đấu thầu quốc gia?",
    options: [
      "A. Người có thẩm quyền",
      "B. Chủ đầu tư",
      "C. Tổ chuyên gia",
      "D. Tư vấn đấu thầu",
    ],
    answer: "B",
  },
  {
    STT: "221",
    question:
      "Chọn phương án đúng về thời gian áp dụng mua sắm trực tuyến đối với các hạng mục trong danh mục hàng hóa, dịch vụ mua sắm tập trung?",
    options: [
      "A. Thời gian áp dụng là thời gian thực hiện hợp đồng trong trường hợp không ký thỏa thuận khung nhưng không quá 24 tháng kể từ ngày hợp đồng có hiệu lực hoặc thời gian có hiệu lực của thỏa thuận khung",
      "B. Thời gian áp dụng là 24 tháng kể từ ngày kết quả lựa chọn nhà thầu được đăng tải trên Hệ thống mạng đấu thầu quốc gia trong trường hợp hợp đồng, thỏa thuận khung chưa được công khai",
      "C. Thời gian áp dụng là 24 tháng kể từ ngày kết quả lựa chọn nhà thầu được đăng tải trên Hệ thống mạng đấu thầu quốc gia",
      "D. Phương án A và B đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "222",
    question:
      "Công việc nào sau đây phải thực hiện trên Hệ thống mạng đấu thầu quốc gia?",
    options: [
      "A. Lập E-HSMT",
      "B. Trình phê duyệt E-HSMT, phê duyệt E-HSMT",
      "C. Phê duyệt kết quả lựa chọn nhà thầu",
      "D. Tất cả các phương án trên đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "223",
    question:
      "Đối với đấu thầu qua mạng, việc trả lời yêu cầu làm rõ E-HSMT được thực hiện theo phương án nào?",
    options: [
      "A. Do tổ chuyên gia thực hiện bằng văn bản",
      "B. Do tổ chuyên gia thực hiện trên Hệ thống mạng đấu thầu quốc gia",
      "C. Do tư vấn đấu thầu thực hiện bằng tài khoản của đơn vị tư vấn",
      "D. Do Chủ đầu tư thực hiện trên Hệ thống mạng đấu thầu quốc gia",
    ],
    answer: "D",
  },
  {
    STT: "224",
    question:
      "Đối với gói thầu đấu thầu qua mạng, trường hợp sửa đổi E-HSMT sau khi phát hành, chủ đầu tư phải đăng tải tài liệu nào sau đây trên Hệ thống?",
    options: [
      "A. Quyết định sửa đổi kèm theo những nội dung sửa đổi E-HSMT",
      "B. E-HSMT đã được sửa đổi",
      "C. Báo cáo thẩm định E-HSMT sửa đổi",
      "D. Phương án A và B đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "225",
    question:
      "Nhà thầu không phải đính kèm thư bảo lãnh (hoặc giấy chứng nhận bảo hiểm bảo lãnh) mà chỉ phải cam kết trong đơn dự thầu đối với gói thầu xây lắp khi nào?",
    options: [
      "A. E-HSMT yêu cầu giá trị bảo đảm dự thầu là 40 triệu đồng",
      "B. E-HSMT yêu cầu giá trị bảo đảm dự thầu là 50 triệu đồng",
      "C. E-HSMT yêu cầu giá trị bảo đảm dự thầu là 60 triệu đồng",
      "D. E-HSMT yêu cầu giá trị bảo đảm dự thầu là 100 triệu đồng",
    ],
    answer: "A",
  },
  {
    STT: "226",
    question:
      "Bản gốc thư bảo lãnh dự thầu, giấy chứng nhận bảo hiểm bảo lãnh trong đấu thầu qua mạng được nộp như thế nào?",
    options: [
      "A. Gửi qua email đến Tổ trưởng Tổ chuyên gia",
      "B. Gửi cho Chủ đầu tư khi nhà thầu được mời vào đối chiếu tài liệu",
      "C. Gửi bản gốc đến địa chỉ bên mời thầu theo quy định trong E-HSMT",
      "D. Gửi cho Đơn vị tư vấn đấu thầu đánh giá E-HSDT",
    ],
    answer: "B",
  },
  {
    STT: "227",
    question:
      "Đối với đấu thầu qua mạng, quy định nào về việc mở thầu và công khai biên bản mở thầu trên Hệ thống mạng đấu thầu quốc gia là đúng?",
    options: [
      "A. Hệ thống tự động mở thầu và công khai biên bản mở thầu trong thời hạn không quá 02 giờ kể từ thời điểm đóng thầu.",
      "B. Chủ đầu tư phải mở thầu và công khai biên bản mở thầu trên Hệ thống trong thời hạn không quá 04 giờ kể từ thời điểm đóng thầu.",
      "C. Tổ chuyên gia phải mở thầu và công khai biên bản mở thầu trên Hệ thống trong thời hạn không quá 02 giờ kể từ thời điểm đóng thầu.",
      "D. Chủ đầu tư phải mở thầu và công khai biên bản mở thầu trên Hệ thống trong thời hạn không quá 02 giờ kể từ thời điểm đóng thầu.",
    ],
    answer: "D",
  },
  {
    STT: "228",
    question:
      "Đối với gói thầu tổ chức lựa chọn nhà thầu qua mạng, trong quá trình đánh giá E-HSDT, Chủ đầu tư nhận thấy nhà thầu có tên trong biên bản mở thầu đang bị khóa tài khoản theo quy định của pháp luật về đấu thầu, E-HSDT của nhà thầu bị đánh giá như thế nào?",
    options: [
      "A. E-HSDT của nhà thầu được tiếp tục xem xét, đánh giá mà không cần phải mở khóa tài khoản trước khi ký hợp đồng",
      "B. E-HSDT của nhà thầu được tiếp tục xem xét, đánh giá nhưng chỉ được đề nghị trúng thầu khi thực hiện mở khóa tài khoản trước khi ký hợp đồng",
      "C. E-HSDT của nhà thầu không được tiếp tục xem xét, đánh giá",
      "D. Nhà thầu bị cấm tham gia hoạt động đấu thầu do có hành vi gian lận",
    ],
    answer: "C",
  },
  {
    STT: "229",
    question:
      "Đối với đấu thầu qua mạng, sau thời điểm đóng thầu, nhận định nào sau đây là đúng?",
    options: [
      "A. Nhà thầu có thể thay đổi nội dung E-HSDT nếu phát hiện sai sót",
      "B. Nhà thầu có thể tự làm rõ E-HSDT trên Hệ thống",
      "C. Nhà thầu không rút được E-HSDT trên Hệ thống",
      "D. Chủ đầu tư không được phép mở thầu khi chỉ có 01 nhà thầu tham dự",
    ],
    answer: "C",
  },
  {
    STT: "230",
    question:
      "Đối với đấu thầu qua mạng, trường hợp Hệ thống gặp sự cố thì trường hợp nào được Hệ thống tự động gia hạn thời điểm đóng thầu?",
    options: [
      "A. Các gói thầu có thời điểm đóng thầu, thời điểm kết thúc chào giá trực tuyến trong thời gian từ khi Hệ thống gặp sự cố cho đến thời điểm sau hoàn thành khắc phục sự cố 02 giờ",
      "B. Các gói thầu có thời điểm đóng thầu, thời điểm kết thúc chào giá trực tuyến, thời điểm đăng tải kết quả lựa chọn nhà thầu trong thời gian từ khi Hệ thống gặp sự cố cho đến thời điểm sau hoàn thành khắc phục sự cố 02 giờ",
      "C. Các gói thầu có thời điểm đóng thầu trong thời gian từ khi Hệ thống gặp sự cố cho đến thời điểm sau hoàn thành khắc phục sự cố 04 giờ",
      "D. Các đáp án trên đều sai",
    ],
    answer: "A",
  },
  {
    STT: "231",
    question: "Đối với đấu thầu qua mạng, khi tham dự thầu, nhà thầu....?",
    options: [
      "A. Chịu trách nhiệm về tính chính xác của các thông tin kê khai trên webform và file tài liệu đính kèm",
      "B. Chỉ nộp một bộ E-HSDT đối với một E-TBMT",
      "C. Chỉ được rút, sửa đổi, nộp lại E-HSDT trước thời điểm đóng thầu",
      "D. Cả 3 đáp án trên đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "232",
    question: "Khi nào nhà thầu phải nộp lại E-HSDT đã nộp?",
    options: [
      "A. Khi Tổ chuyên gia phát hiện E-HSDT bị lỗi kỹ thuật không mở được",
      "B. Khi Hệ thống mạng đấu thầu quốc gia gặp sự cố phải tự động gia hạn",
      "C. Khi E-HSMT được sửa đổi",
      "D. Các phương án trên đều đúng",
    ],
    answer: "C",
  },
  {
    STT: "233",
    question:
      "Đối với gói thầu tổ chức đấu thầu rộng rãi qua mạng, trường hợp tại thời điểm đóng thầu mà không có nhà thầu nộp E-HSDT thì chủ đầu tư quyết định theo phương án nào sau đây?",
    options: [
      "A. Huỷ E-TBMT để mời thầu lại",
      "B. Chuyển sang hình thức đấu thầu rộng rãi không qua mạng",
      "C. Cho phép gia hạn thời điểm đóng thầu tối thiểu 05 ngày làm việc đối với gói thầu xây lắp, hỗn hợp có giá gói thầu không quá 20 tỷ đồng, gói thầu mua sắm hàng hoá, dịch vụ phi tư vấn có giá không quá 10 tỷ đồng",
      "D. Phương án A và C đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "234",
    question:
      "Khi đánh giá E-HSDT gói thầu xây lắp đấu thầu rộng rãi qua mạng, trường hợp có sự không thống nhất giữa thông tin về hợp đồng tương tự kê khai trên webform và file tài liệu chứng minh các thông tin về hợp đồng đó thì xử lý như nào?",
    options: [
      "A. Đánh giá nhà thầu không đạt yêu cầu về hợp đồng tương tự",
      "B. Yêu cầu nhà thầu làm rõ E-HSDT trên Hệ thống mạng đấu thầu quốc gia",
      "C. Yêu cầu nhà thầu gửi bổ sung hợp đồng tương tự bằng bản giấy để đánh giá",
      "D. Các phương án trên đều sai",
    ],
    answer: "B",
  },
  {
    STT: "235",
    question:
      "Đối với đấu thầu qua mạng, việc làm rõ E-HSDT giữa Chủ đầu tư và nhà thầu có E-HSDT cần phải làm rõ được thực hiện như thế nào?",
    options: [
      "A. Chủ đầu tư được làm rõ đối với các nội dung về tư cách hợp lệ, năng lực, kinh nghiệm, không được làm rõ đối với yêu cầu về kỹ thuật, tài chính",
      "B. Chủ đầu tư được làm rõ đối với yêu cầu về kỹ thuật, tài chính, không được làm rõ đối với các nội dung về tư cách hợp lệ, năng lực, kinh nghiệm",
      "C. Chủ đầu tư dành cho nhà thầu tối đa 03 ngày để nhà thầu thực hiện việc làm rõ E-HSDT",
      "D. Chủ đầu tư dành cho nhà thầu tối thiểu 03 ngày làm việc để nhà thầu thực hiện việc làm rõ E-HSDT",
    ],
    answer: "D",
  },
  {
    STT: "236",
    question:
      "File đính kèm nào sau đây của nhà thầu nộp trên Hệ thống mạng đấu thầu quốc gia không được xem xét, đánh giá?",
    options: [
      "A. Các file mở, đọc được bằng các phần mềm thông dụng như: MS Office, PDF, AutoCad, Photoshop...",
      "B. Các file sử dụng phông chữ thuộc bảng mã Unicode",
      "C. Các file nén mở được bằng các phần mềm giải nén thông dụng như ZIP, Rar hoặc 7Zip",
      "D. Các file bị nhiễm virus, bị lỗi, hỏng",
    ],
    answer: "D",
  },
  {
    STT: "237",
    question:
      "Đối với đấu thầu qua mạng, nội dung nào sau đây do Hệ thống tự động đánh giá?",
    options: [
      "A. Bảo đảm dự thầu",
      "B. Thoả thuận liên danh đối với nhà thầu liên danh",
      "C. Doanh thu bình quân 3 năm gần nhất của nhà thầu",
      "D. Các đáp án trên đều đúng",
    ],
    answer: "C",
  },
  {
    STT: "238",
    question:
      "Đối với đấu thầu qua mạng, nội dung đánh giá kết quả hoạt động tài chính nào sau đây là đúng?",
    options: [
      "A. Đối với số liệu về kết quả hoạt động tài chính từ 2021 trở đi, Hệ thống đánh giá căn cứ thông tin được trích xuất hoặc thông tin do nhà thầu cập nhật",
      "B. Đối với số liệu về kết quả hoạt động tài chính trước năm 2021, hệ thống đánh giá căn cứ thông tin do nhà thầu kê khai",
      "C. Đối với nhà thầu là hộ kinh doanh, không đánh giá tiêu chí kết quả hoạt động tài chính",
      "D. Tất cả phương án trên đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "239",
    question:
      "Đối với đấu thầu rộng rãi qua mạng, một số nội dung do Hệ thống mạng đấu thầu quốc gia đánh giá 'không đạt' thì Tổ chuyên gia không thể sửa đổi kết quả đánh giá từ 'không đạt' thành 'đạt'. Phương án nào sau đây là đúng?",
    options: [
      "A. Tư cách hợp lệ, nhân sự không vi phạm, trạng thái tài khoản, doanh thu bình quân hằng năm.",
      "B. Tư cách hợp lệ, bảo đảm dự thầu, thực hiện nghĩa vụ thuế, kết quả hoạt động tài chính, doanh thu bình quân hằng năm",
      "C. Tư cách hợp lệ, nhân sự không vi phạm, trạng thái tài khoản, thực hiện nghĩa vụ thuế, kết quả hoạt động tài chính, doanh thu bình quân hằng năm",
      "D. Tư cách hợp lệ, nhân sự không vi phạm, lịch sử không hoàn thành hợp đồng, thực hiện nghĩa vụ thuế, kết quả hoạt động tài chính, doanh thu bình quân hằng năm",
    ],
    answer: "C",
  },
  {
    STT: "240",
    question:
      "Quy trình 02 trong đánh giá E-HSDT được áp dụng đối với gói thầu nào sau đây?",
    options: [
      "A. Gói thầu mua sắm hàng hóa áp dụng một giai đoạn một túi hồ sơ, phương pháp 'giá thấp nhất' và không có ưu đãi",
      "B. Gói thầu dịch vụ phi tư vấn áp dụng phương pháp 'giá đánh giá' và chào ưu đãi như nhau",
      "C. Gói thầu xây lắp áp dụng phương pháp 'giá thấp nhất' và không có ưu đãi",
      "D. Gói thầu máy đặt, máy mượn áp dụng phương pháp 'giá thấp nhất' và chào ưu đãi như nhau",
    ],
    answer: "A",
  },
  {
    STT: "241",
    question:
      "Chủ đầu tư yêu cầu gia hạn hiệu lực hồ sơ dự thầu, bảo đảm dự thầu trong trường hợp nào sau đây?",
    options: [
      "A. Trước khi hết hạn hiệu lực hồ sơ dự thầu trong trường hợp cần gia hạn để tiếp tục đánh giá",
      "B. Trường hợp nhà thầu xếp hạng tiếp theo được mời thương thảo nhưng HSDT hết hiệu lực",
      "C. Trước khi phê duyệt kết quả lựa chọn nhà thầu",
      "D. Phương án A và B đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "242",
    question:
      "Trong quá trình đánh giá, Tổ chuyên gia phát hiện nhà thầu tham dự thầu trên Hệ thống mạng đấu thầu quốc gia đính kèm tệp tin có thiết lập mật khẩu thì xử lý thế nào?",
    options: [
      "A. Yêu cầu nhà thầu nộp lại tệp tin không có mật khẩu trên Hệ thống",
      "B. Yêu cầu nhà thầu cung cấp mật khẩu để xem xét",
      "C. Tệp tin này không được xem xét, đánh giá",
      "D. Phương án A và B đều đúng",
    ],
    answer: "C",
  },
  {
    STT: "243",
    question:
      "Theo quy định tại Thông tư số 79/2025/TT-BTC, quy định về thời điểm bắt đầu và kết thúc chào giá trực tuyến theo quy trình rút gọn?",
    options: [
      "A. Thời điểm bắt đầu và kết thúc phải trong giờ hành chính.",
      "B. Thời điểm bắt đầu không bắt buộc trong giờ hành chính nhưng kết thúc phải trong giờ hành chính.",
      "C. Thời điểm bắt đầu và kết thúc không bắt buộc trong giờ hành chính.",
      "D. Tất cả phương án trên đều sai",
    ],
    answer: "A",
  },
  {
    STT: "244",
    question:
      "Đối với gói thầu chào giá trực tuyến rút gọn, nhà thầu xác nhận về việc chấp thuận được trao hợp đồng trong thời gian tối đa bao lâu kể từ ngày chủ đầu tư mời nhà thầu xác nhận trên Hệ thống?",
    options: [
      "A. 03 ngày",
      "B. 03 ngày làm việc",
      "C. 05 ngày",
      "D. 05 ngày làm việc",
    ],
    answer: "B",
  },
  {
    STT: "245",
    question:
      "Gói thầu chào giá trực tuyến rút gọn, trường hợp nhà thầu từ chối hoặc không xác nhận về việc chấp thuận được trao hợp đồng trên Hệ thống thì nội dung nào sau đây không đúng?",
    options: [
      "A. Công khai tên nhà thầu trên Hệ thống mạng đấu thầu quốc gia",
      "B. Khoá tài khoản trong thời hạn 03 tháng kể từ ngày Bộ Tài chính nhận được văn bản đề nghị",
      "C. Khóa chức năng chào giá trực tuyến trong thời hạn 06 tháng kể từ ngày công khai tên nhà thầu",
      "D. Bị đánh giá về uy tín trong việc tham dự thầu",
    ],
    answer: "B",
  },
  {
    STT: "246",
    question:
      "Chào giá trực tuyến theo quy trình thông thường áp dụng đối với gói thầu nào sau đây?",
    options: [
      "A. Dịch vụ phi tư vấn thông dụng, đơn giản",
      "B. Xây lắp",
      "C. Dịch vụ tư vấn",
      "D. Hỗn hợp",
    ],
    answer: "A",
  },
  {
    STT: "247",
    question:
      "Nhà thầu phải thực hiện xác nhận về việc chấp thuận được trao hợp đồng trên Hệ thống mạng đấu thầu quốc gia đối với các hình thức lựa chọn nhà thầu qua mạng nào?",
    options: [
      "A. Đấu thầu rộng rãi, chào hàng cạnh tranh, đấu thầu hạn chế.",
      "B. Chào giá trực tuyến theo quy trình thông thường",
      "C. Chào giá trực tuyến theo quy trình rút gọn",
      "D. Các phương án trên đều đúng",
    ],
    answer: "C",
  },
  {
    STT: "248",
    question:
      "Đối với chào giá trực tuyến rút gọn, kể từ lượt chào giá thứ hai, giá chào của nhà thầu không được thấp hơn giá thấp nhất hiển thị trên Hệ thống là bao nhiêu %?",
    options: ["A. 80%", "B. 85%", "C. 90%", "D. 95%"],
    answer: "C",
  },
  {
    STT: "249",
    question:
      "Đối với chào giá trực tuyến rút gọn, giá trị bảo đảm dự thầu tối đa là giá trị nào sau đây?",
    options: [
      "A. 5% giá gói thầu",
      "B. 10% giá gói thầu",
      "C. 1-3% giá gói thầu",
      "D. Không yêu cầu về bảo đảm dự thầu",
    ],
    answer: "D",
  },
  {
    STT: "250",
    question:
      "Đối với gói thầu áp dụng chào giá trực tuyến theo quy trình thông thường, trường hợp nhà thầu được mời tham gia chào giá trực tuyến nhưng nhà thầu từ chối tham gia thì xử lý thế nào?",
    options: [
      "A. Đề xuất về tài chính của nhà thầu sẽ bị đánh giá là không đạt",
      "B. Nhà thầu sẽ bị loại và bị khóa tài khoản trong vòng 06 tháng",
      "C. Hồ sơ dự thầu của nhà thầu sẽ tiếp tục được đánh giá về tài chính căn cứ theo HSDT đã nộp trước đó",
      "D. Phương án A và B đều đúng",
    ],
    answer: "C",
  },
  {
    STT: "251",
    question:
      "Mua sắm trực tuyến được áp dụng đối với hàng hoá, dịch vụ của gói thầu thuộc dự toán mua sắm với giá gói thầu có hạn mức tối đa là bao nhiêu?",
    options: [
      "A. 100 triệu đồng",
      "B. 300 triệu đồng",
      "C. 500 triệu đồng",
      "D. 01 tỷ đồng",
    ],
    answer: "C",
  },
  {
    STT: "252",
    question:
      "Trong mua sắm tập trung áp dụng đấu thầu rộng rãi, hợp đồng điện tử có thể được ký kết giữa các đối tượng nào?",
    options: [
      "A. Đơn vị mua sắm tập trung và các nhà thầu trúng thầu (trong trường hợp không ký thỏa thuận khung)",
      "B. Đơn vị có nhu cầu mua sắm với các nhà thầu trúng thầu (trong trường hợp đơn vị mua sắm tập trung ký thỏa thuận khung với nhà thầu trúng thầu)",
      "C. Phương án A và B đều đúng",
      "D. Phương án A và B đều sai",
    ],
    answer: "C",
  },
  {
    STT: "253",
    question: "Mua sắm trực tuyến được áp dụng đối với gói thầu nào sau đây?",
    options: [
      "A. Gói thầu mua sắm hàng hóa, dịch vụ thuộc dự toán mua sắm có giá gói thầu không quá 500 triệu đồng; gói thầu mua sắm hàng hóa, dịch vụ thuộc dự án có giá gói thầu không quá 01 tỷ đồng",
      "B. Gói thầu xây lắp thuộc dự toán mua sắm có giá gói thầu không quá 01 tỷ đồng; gói thầu xây lắp thuộc dự án có giá gói thầu không quá 02 tỷ đồng",
      "C. Gói thầu mua sắm hàng hóa, cung cấp dịch vụ phi tư vấn thuộc dự án có giá gói thầu không quá 05 tỷ đồng",
      "D. Phương án B và C đều đúng",
    ],
    answer: "A",
  },
  {
    STT: "254",
    question:
      "Đối với gói thầu áp dụng hình thức chào giá trực tuyến rút gọn, việc thẩm định kết quả lựa chọn nhà thầu được thực hiện như thế nào?",
    options: [
      "A. Chỉ thẩm định nội dung về giá chào",
      "B. Bắt buộc thẩm định khi người có thẩm quyền yêu cầu",
      "C. Không phải thẩm định kết quả lựa chọn nhà thầu",
      "D. Phương án A và B đều đúng",
    ],
    answer: "C",
  },
  {
    STT: "255",
    question:
      "Khi đánh giá E-HSDT gói thầu xây lắp đấu thầu rộng rãi qua mạng, trường hợp có sự không thống nhất giữa thông tin về hợp đồng tương tự kê khai trên webform và file tài liệu chứng minh các thông tin về hợp đồng đó thì phương án nào sau đây là đúng?",
    options: [
      "A. Đánh giá nhà thầu không đạt yêu cầu về hợp đồng tương tự",
      "B. Yêu cầu nhà thầu làm rõ E-HSDT trên Hệ thống mạng đấu thầu quốc gia",
      "C. Yêu cầu nhà thầu gửi bổ sung hợp đồng tương tự bằng bản giấy để đánh giá",
      "D. Phương án B và C đều đúng",
    ],
    answer: "B",
  },
  {
    STT: "256",
    question:
      "Nhận định nào sau đây về văn bản điện tử trên Hệ thống mạng đấu thầu quốc gia là đúng?",
    options: [
      "A. Văn bản điện tử trên Hệ thống có giá trị theo quy định của pháp luật về giao dịch điện tử, làm cơ sở đối chiếu, so sánh, xác thực thông tin phục vụ công tác đánh giá, thẩm định, thanh tra, kiểm tra, kiểm toán và giải ngân",
      "B. Thời điểm gửi, nhận văn bản điện tử được xác định căn cứ theo thời gian thực ghi lại trên Hệ thống",
      "C. Khi gửi hồ sơ thanh quyết toán đến Kho bạc Nhà nước, nhà thầu không phải cung cấp thông tin, tài liệu cho Kho bạc Nhà nước đối với các thông tin, tài liệu là văn bản điện tử trên Hệ thống",
      "D. Các phương án trên đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "257",
    question:
      "Đối với đấu thầu qua mạng, chức năng trả lời làm rõ E-HSDT trên Hệ thống mạng đấu thầu quốc gia được thực hiện bao nhiêu lần đối với mỗi yêu cầu làm rõ?",
    options: [
      "A. 01 lần",
      "B. 02 lần",
      "C. 03 lần",
      "D. Không giới hạn số lần",
    ],
    answer: "D",
  },
  {
    STT: "258",
    question:
      "Đối với đấu thầu qua mạng, nhà thầu liên danh nộp bảo đảm dự thầu theo thể thức nào sau đây?",
    options: [
      "A. Từng thành viên liên danh có thể sử dụng thể thức bảo lãnh dự thầu khác nhau",
      "B. Các thành viên liên danh bắt buộc phải sử dụng cùng thể thức bảo lãnh dự thầu điện tử",
      "C. Các thành viên liên danh phải sử dụng cùng thể thức: bảo lãnh dự thầu điện tử hoặc bảo lãnh dự thầu bằng giấy",
      "D. Các thành viên liên danh bắt buộc phải sử dụng cùng thể thức bảo lãnh dự thầu bằng giấy",
    ],
    answer: "C",
  },
  {
    STT: "259",
    question: "Nhận định nào sau đây là đúng?",
    options: [
      "A. Trong vòng 05 ngày làm việc, kể từ ngày nhận được yêu cầu của chủ đầu tư, nếu nhà thầu từ chối hoặc không nộp bản gốc thư bảo lãnh dự thầu... thì nhà thầu sẽ bị xử lý theo đúng cam kết",
      "B. Trong vòng 05 ngày làm việc, kể từ ngày nhận được yêu cầu của bên mời thầu, nếu nhà thầu từ chối hoặc không nộp bản gốc thư bảo lãnh dự thầu... thì nhà thầu sẽ bị xử lý theo đúng cam kết",
      "C. Trong vòng 05 ngày làm việc, kể từ ngày nhận được yêu cầu của tổ chuyên gia, nếu nhà thầu từ chối hoặc không nộp bản gốc thư bảo lãnh dự thầu... thì nhà thầu sẽ bị xử lý theo đúng cam kết",
      "D. Trong vòng 05 ngày làm việc, kể từ ngày nhận được yêu cầu của tư vấn đấu thầu, nếu nhà thầu từ chối hoặc không nộp bản gốc thư bảo lãnh dự thầu... thì nhà thầu sẽ bị xử lý theo đúng cam kết",
    ],
    answer: "A",
  },
  {
    STT: "260",
    question:
      "Gói thầu nào sau đây không phải áp dụng đấu thầu qua mạng trên Hệ thống mạng đấu thầu quốc gia?",
    options: [
      "A. Gói thầu hỗn hợp theo phương thức 02 giai đoạn",
      "B. Gói thầu đấu thầu rộng rãi quốc tế",
      "C. Gói thầu áp dụng hình thức chỉ định thầu, đặt hàng, giao nhiệm vụ, mua sắm trực tiếp... có sự tham gia của cộng đồng",
      "D. Các phương án trên đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "261",
    question: "Việc hủy E-TBMT được thực hiện tại thời điểm nào?",
    options: [
      "A. Được thực hiện tại thời điểm đóng thầu trong trường hợp không có nhà thầu tham dự thầu",
      "B. Được thực hiện sau thời điểm mở thầu",
      "C. Được thực hiện trước thời điểm đóng thầu trong trường hợp đã phát hành hồ sơ mời thầu trước ngày 01/7/2025 nhưng đến ngày 4/8/2025 chưa đóng thầu",
      "D. Phương án A và C đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "262",
    question:
      "Khi chủ đầu tư sửa đổi E-HSMT, thay đổi thời điểm đóng thầu (nếu có) trên Hệ thống mạng đấu thầu quốc gia, nhận định nào sau đây đúng?",
    options: [
      "A. Nhà thầu chịu trách nhiệm theo dõi thông tin trên Hệ thống mạng đấu thầu quốc gia để cập nhật thông tin",
      "B. Nhà thầu phải tự chịu trách nhiệm và chịu bất lợi nếu không theo dõi, cập nhật thông tin",
      "C. Hệ thống mạng đấu thầu quốc gia tự động gửi email thông báo cho các nhà thầu quan tâm",
      "D. Các phương án trên đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "263",
    question:
      "Trường hợp E-HSMT không đầy đủ thông tin (thiếu thiết kế, bản vẽ...) hoặc thông tin không rõ ràng gây khó khăn cho nhà thầu thì chủ đầu tư phải làm gì?",
    options: [
      "A. Phải sửa đổi, bổ sung E-HSMT cho phù hợp và tiến hành đăng tải lại E-HSMT",
      "B. Thực hiện bổ sung, hoàn thiện cho phù hợp và sửa đổi trên Hệ thống",
      "C. Đính kèm thêm các thành phần còn thiếu của E-HSMT trên Hệ thống",
      "D. Hủy thầu",
    ],
    answer: "A",
  },
  {
    STT: "264",
    question:
      "Việc phải ký kết hợp đồng điện tử trên Hệ thống mạng đấu thầu quốc gia được áp dụng đối với gói thầu nào sau đây?",
    options: [
      "A. Gói thầu áp dụng đấu thầu rộng rãi, hạn chế, chào hàng cạnh tranh... mà việc thanh toán được thực hiện qua Kho bạc nhà nước",
      "B. Gói thầu áp dụng đấu thầu rộng rãi, hạn chế, chào hàng cạnh tranh... mà việc thanh toán không thực hiện qua Kho bạc nhà nước",
      "C. Tất cả các gói thầu áp dụng đấu thầu qua mạng",
      "D. Tất cả các gói thầu áp dụng đấu thầu qua mạng và không qua mạng",
    ],
    answer: "A",
  },
  {
    STT: "265",
    question:
      "Đối với đấu thầu qua mạng, sau khi đánh giá E-HSDT, tổ trưởng tổ chuyên gia phải thực hiện nội dung gì sau đây trên Hệ thống?",
    options: [
      "A. Đính kèm bản scan báo cáo đánh giá E-HSDT (có chữ ký của tất cả thành viên trong tổ chuyên gia)",
      "B. Đính kèm bản scan báo cáo đánh giá E-HSDT (không cần có chữ ký của tất cả thành viên)",
      "C. Đính kèm bản scan báo cáo đánh giá E-HSDT (chỉ cần chữ ký của tổ trưởng)",
      "D. Tất cả các phương án đều sai",
    ],
    answer: "A",
  },
  {
    STT: "266",
    question:
      "Gói thầu hàng hóa có giá 02 tỷ đồng thực hiện chào giá trực tuyến rút gọn, chủ đầu tư đăng tải TBMT vào 11h00 ngày Thứ 2 (15/9/2025), thời điểm nào kết thúc sớm nhất?",
    options: [
      "A. 11h00 ngày thứ 6 (19/9/2025)",
      "B. 08h00 ngày thứ 3 (23/9/2025)",
      "C. 11h00 ngày thứ 3 (23/9/2025)",
      "D. 08h00 ngày thứ 4 (24/9/2025)",
    ],
    answer: "D",
  },
  {
    STT: "267",
    question:
      "Đối với đấu thầu qua mạng, nhà thầu đính kèm bản scan thư giảm giá khi tham dự thầu thì việc đánh giá tệp tin này được thực hiện như thế nào?",
    options: [
      "A. Không được xem xét, đánh giá",
      "B. Được xem xét, đánh giá căn cứ tệp tin đính kèm",
      "C. Được làm rõ trong trường hợp có sự sai khác giữa tệp tin và đơn dự thầu",
      "D. Được bổ sung trong trường hợp có sự sai khác",
    ],
    answer: "A",
  },
  {
    STT: "268",
    question:
      "Gói thầu mua sắm hàng hóa 15 tỷ đồng thực hiện đấu thầu rộng rãi qua mạng, trường hợp tại thời điểm đóng thầu không có nhà thầu tham dự, chủ đầu tư gia hạn đóng thầu thì tối thiểu bao nhiêu ngày?",
    options: [
      "A. 10 ngày",
      "B. 05 ngày làm việc",
      "C. 05 ngày",
      "D. 03 ngày làm việc",
    ],
    answer: "A",
  },
  {
    STT: "269",
    question:
      "Phương thức lựa chọn nhà thầu nào sau đây áp dụng cho đấu thầu qua mạng?",
    options: [
      "A. 01 giai đoạn, 01 túi hồ sơ",
      "B. 02 giai đoạn, 01 túi hồ sơ",
      "C. 02 giai đoạn, 02 túi hồ sơ",
      "D. Các phương án trên đều đúng",
    ],
    answer: "A",
  },
  {
    STT: "270",
    question:
      "Đối với dự toán mua sắm, hạn mức áp dụng chào giá trực tuyến theo quy trình thông thường đối với gói thầu mua sắm hàng hóa là?",
    options: [
      "A. Có giá gói thầu không quá 500 triệu đồng",
      "B. Có giá gói thầu không quá 02 tỷ đồng",
      "C. Có giá gói thầu không quá 05 tỷ đồng",
      "D. Không có quy định về hạn mức áp dụng",
    ],
    answer: "D",
  },
  {
    STT: "271",
    question:
      "Gói thầu hàng hóa có giá gói thầu 01 tỷ đồng thực hiện chào giá trực tuyến theo quy trình rút gọn, trường hợp chủ đầu tư đăng tải thông báo mời thầu vào 11h00 ngày Thứ 2 (15/9/2025), thời điểm nào sau đây là thời điểm kết thúc chào giá trực tuyến sớm nhất?",
    options: [
      "A. 08h00 ngày thứ 6 (19/9/2025)",
      "B. 08h00 ngày thứ bẩy(20/9/2025)",
      "C. 11h00 ngày thứ 6 (19/9/2025)",
      "D. 08h00 ngày thứ 2 (22/9/2025)",
    ],
    answer: "D",
  },
  {
    STT: "272",
    question:
      "Đối với đấu thầu qua mạng, thành phần nào sau đây không được coi là một phần của E-HSMST, E-HSMT và nhà thầu không phải đáp ứng các yêu cầu này?",
    options: [
      "A. Bảng dữ liệu được số hóa dưới dạng webform trên Hệ thống mạng đấu thầu quốc gia",
      "B. Tiêu chuẩn đánh giá về tính hợp lệ được đính kèm trên Hệ thống mạng đấu thầu quốc gia",
      "C. Yêu cầu về năng lực, kinh nghiệm được đính kèm trên Hệ thống mạng đấu thầu quốc gia",
      "D. Phương án B và C đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "273",
    question:
      "Yêu cầu nào sau đây là đúng đối với tệp tin (file) đăng tải trên Hệ thống mạng đấu thầu quốc gia?",
    options: [
      "A. Các file mở, đọc được bằng các phần mềm thông dụng... Các file sử dụng phông chữ không thuộc bảng mã Unicode",
      "B. Các file nén mở được bằng các phần mềm giải nén thông dụng... Trường hợp sử dụng file nén, các file sau khi giải nén phải có định dạng đúng quy định.",
      "C. Không bị nhiễm virus, không bị lỗi, hỏng và không thiết lập mật khẩu",
      "D. Các phương án trên đều đúng",
    ],
    answer: "C",
  },
  {
    STT: "274",
    question:
      "Đối với đấu thầu qua mạng, trường hợp file đính kèm trong E-HSMT không thể mở hoặc không đọc được thì chủ đầu tư phải thực hiện hành động nào sau đây?",
    options: [
      "A. Đăng tải và phát hành lại toàn bộ E-HSMT",
      "B. Sửa đổi E-HSMT và không phải phát hành lại toàn bộ E-HSMT",
      "C. Đề nghị Trung tâm Đấu thầu qua mạng quốc gia sửa đổi E-HSMT",
      "D. Các phương án trên đều đúng",
    ],
    answer: "A",
  },
  {
    STT: "275",
    question:
      "Đối với đấu thầu qua mạng, trường hợp Hệ thống mạng đấu thầu quốc gia gặp sự cố không thể vận hành và phải tự động gia hạn thời điểm đóng thầu của các gói thầu bị ảnh hưởng... thì việc đánh giá E-HSDT được thực hiện trên cơ sở thời điểm đóng thầu nào sau đây?",
    options: [
      "A. Thời điểm đóng thầu nêu trong E-TBMT được đăng tải (trước thời điểm Hệ thống gặp sự cố)",
      "B. Thời điểm đóng thầu mà Hệ thống mạng đấu thầu quốc gia tự động gia hạn",
      "C. Do Chủ đầu tư quyết định",
      "D. Phương án A và B đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "276",
    question:
      "Loại Chứng thư số nào sau đây được sử dụng trên Hệ thống mạng đấu thầu quốc gia?",
    options: [
      "A. Chứng thư số chuyên dùng do tất cả tổ chức có chức năng cung cấp dịch vụ chứng thực chữ ký số chuyên dùng cấp",
      "B. Tất cả các loại chứng thư số",
      "C. Chứng thư số công cộng do tổ chức cung cấp dịch vụ chứng thực chữ ký số công cộng cấp hoặc chứng thư số do tổ chức cung cấp dịch vụ chứng thực chữ ký số chuyên dùng Chính phủ cấp",
      "D. Phương án A và C đều đúng",
    ],
    answer: "C",
  },
  {
    STT: "277",
    question:
      "Đối với đấu thầu qua mạng, trường hợp nhà thầu sử dụng bảo lãnh dự thầu điện tử trên Hệ thống mạng đấu thầu quốc gia, phát biểu nào sau đây là đúng?",
    options: [
      "A. Giá trị bảo lãnh dự thầu luôn đáp ứng yêu cầu trong E-HSMT",
      "B. Thời gian hiệu lực của bảo lãnh dự thầu luôn đáp ứng yêu cầu trong E-HSMT",
      "C. Đối tượng thụ hưởng bảo lãnh dự thầu luôn đáp ứng yêu cầu trong E-HSMT",
      "D. Các phương án trên đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "278",
    question:
      "Gói thầu mua sắm hàng hóa (đóng thầu 8h00 ngày 25/9/2025; HĐ 90 ngày; Hệ thống tự động gia hạn đóng thầu 11h ngày 26/9/2025). Nhà thầu A nộp HĐ 90 ngày kể từ 25/9/2025; Nhà thầu B nộp HĐ 90 ngày kể từ 26/9/2025. Bảo đảm dự thầu được đánh giá thế nào?",
    options: [
      "A. Nhà thầu A không hợp lệ; Nhà thầu B hợp lệ",
      "B. Bảo đảm dự thầu của nhà thầu A và nhà thầu B đều được đánh giá là hợp lệ",
      "C. Nhà thầu A hợp lệ; Nhà thầu B không hợp lệ",
      "D. Cả A và B đều không hợp lệ",
    ],
    answer: "B",
  },
  {
    STT: "279",
    question:
      "So sánh điều kiện xét duyệt trúng thầu giữa phương pháp giá cố định và phương pháp dựa trên kỹ thuật đối với gói thầu dịch vụ tư vấn, điểm chung quyết định để nhà thầu được xếp hạng thứ nhất là gì?",
    options: [
      "A. Có giá dự thầu thấp nhất",
      "B. Có điểm tổng hợp cao nhất",
      "C. Có điểm kỹ thuật cao nhất",
      "D. Có giá đề nghị trúng thầu thấp nhất",
    ],
    answer: "C",
  },
  {
    STT: "280",
    question:
      "Phương pháp kết hợp giữa kỹ thuật và giá được áp dụng cho gói thầu tư vấn có đặc điểm nào trong các phương án sau đây?",
    options: [
      "A. Gói thầu tư vấn đơn giản, chi phí thấp",
      "B. Gói thầu tư vấn có yêu cầu kỹ thuật rất cao, chi phí cố định",
      "C. Gói thầu tư vấn chú trọng tới cả chất lượng và chi phí thực hiện",
      "D. Gói thầu tư vấn có quy trình thực hiện đã được tiêu chuẩn hoá",
    ],
    answer: "C",
  },
  {
    STT: "281",
    question:
      "Khi sử dụng phương pháp chấm điểm để xây dựng tiêu chuẩn đánh giá về kỹ thuật, mức điểm yêu cầu tối thiểu về kỹ thuật được quy định là bao nhiêu?",
    options: [
      "A. Không thấp hơn 60% tổng số điểm kỹ thuật",
      "B. Không thấp hơn 70% tổng số điểm kỹ thuật",
      "C. Không thấp hơn 80% tổng số điểm kỹ thuật",
      "D. Không thấp hơn 90% tổng số điểm kỹ thuật",
    ],
    answer: "B",
  },
  {
    STT: "282",
    question:
      "Đối với gói thầu mua sắm hàng hóa, xây lắp, phi tư vấn, hỗn hợp, phương pháp giá đánh giá được áp dụng cho các hình thức lựa chọn nhà thầu nào?",
    options: [
      "A. Chỉ áp dụng với đấu thầu rộng rãi",
      "B. Chỉ định thầu và mua sắm trực tiếp",
      "C. Đấu thầu rộng rãi, đấu thầu hạn chế, chào hàng cạnh tranh",
      "D. Tất cả hình thức lựa chọn nhà thầu",
    ],
    answer: "C",
  },
  {
    STT: "283",
    question:
      "Điều kiện nào sau đây là bắt buộc đối với nhà thầu xây lắp nhưng không được đề cập trong điều kiện xét duyệt trúng thầu đối với nhà thầu tư vấn là tổ chức?",
    options: [
      "A. Có hồ sơ dự thầu hợp lệ",
      "B. Có giá đề nghị trúng thầu không vượt giá gói thầu",
      "C. Có đề xuất kỹ thuật đáp ứng yêu cầu",
      "D. Có giá trị phần sai lệch thiếu không quá 10% giá dự thầu",
    ],
    answer: "D",
  },
  {
    STT: "284",
    question:
      "Khi sửa đổi hợp đồng làm thay đổi thời gian thực hiện nhưng không vượt thời gian thực hiện dự án, ai có quyền quyết định sửa đổi hợp đồng?",
    options: [
      "A. Người có thẩm quyền",
      "B. Chủ đầu tư",
      "C. Cơ quan quản lý cấp trên của chủ đầu tư",
      "D. Bên mời thầu",
    ],
    answer: "B",
  },
  {
    STT: "285",
    question:
      "Thời gian có hiệu lực của bảo đảm thực hiện hợp đồng được tính từ khi nào đến khi nào?",
    options: [
      "A. Từ ngày ký hợp đồng đến ngày thanh toán cuối cùng",
      "B. Từ ngày hợp đồng có hiệu lực đến ngày các bên hoàn thành nghĩa vụ hoặc chuyển sang thực hiện nghĩa vụ bảo hành",
      "C. Từ ngày nộp hồ sơ dự thầu đến ngày hoàn thành nghĩa vụ theo hợp đồng",
      "D. Từ ngày thông báo trúng thầu đến ngày hết thời hạn bảo hành",
    ],
    answer: "B",
  },
  {
    STT: "286",
    question: "Hợp đồng theo thời gian có thể áp dụng trong trường hợp nào?",
    options: [
      "A. Trong tình trạng khẩn cấp",
      "B. Sửa chữa, bảo trì công trình, máy móc, thiết bị",
      "C. Dịch vụ tư vấn khi khó xác định được phạm vi và thời gian thực hiện",
      "D. Tất cả phương án trên đều đúng",
    ],
    answer: "D",
  },
  {
    STT: "287",
    question:
      "Giá trị bảo đảm thực hiện hợp đồng được xác định dựa trên cơ sở nào?",
    options: [
      "A. Giá gói thầu",
      "B. Giá hợp đồng",
      "C. Giá dự thầu của nhà thầu",
      "D. Tổng mức đầu tư của dự án",
    ],
    answer: "B",
  },
  {
    STT: "288",
    question:
      "Trường hợp nào sau đây chủ đầu tư được tự quyết định sửa đổi hợp đồng mà không cần người có thẩm quyền cho phép?",
    options: [
      "A. Sửa đổi hợp đồng làm vượt giá gói thầu và vượt tổng mức đầu tư",
      "B. Sửa đổi thay đổi thời gian thực hiện nhưng không làm vượt thời gian thực hiện dự án hoặc vượt giá gói thầu (bao gồm dự phòng) nhưng không làm vượt tổng mức đầu tư",
      "C. Sửa đổi thay đổi thời gian và vượt thời gian thực hiện dự án",
      "D. Sửa đổi thay đổi thiết kế cơ sở dẫn đến phải điều chỉnh chủ trương đầu tư",
    ],
    answer: "B",
  },
  {
    STT: "289",
    question:
      "Các bên không phải ký kết văn bản sửa đổi hợp đồng khi thay đổi giá hợp đồng nếu đáp ứng đủ điều kiện nào sau đây?",
    options: [
      "A. Không vượt giá gói thầu, nhưng có thể vượt thời gian thực hiện gói thầu",
      "B. Không vượt giá gói thầu, không vượt thời gian và phương pháp, công thức... đã quy định trong hợp đồng",
      "C. Không vượt thời gian thực hiện gói thầu nhưng có thể vượt giá gói thầu",
      "D. Khi thay đổi thời gian nhưng không làm vượt thời gian dự án hoặc giá gói thầu",
    ],
    answer: "B",
  },
  {
    STT: "290",
    question:
      "Đâu là điểm khác biệt chính giữa hợp đồng theo đơn giá cố định và hợp đồng theo đơn giá điều chỉnh?",
    options: [
      "A. Cố định áp dụng cho thời gian dài, điều chỉnh áp dụng cho thời gian ngắn",
      "B. Đơn giá trong hợp đồng đơn giá cố định không thay đổi, còn đơn giá trong hợp đồng điều chỉnh có thể thay đổi",
      "C. Hợp đồng đơn giá cố định không có chi phí dự phòng, còn điều chỉnh có chi phí dự phòng",
      "D. Cố định chỉ áp dụng cho tư vấn, điều chỉnh áp dụng cho xây lắp",
    ],
    answer: "B",
  },
  {
    STT: "291",
    question:
      "So sánh hai tình huống sửa đổi hợp đồng: (1) Vượt giá gói thầu 10% nhưng không vượt tổng mức đầu tư; (2) Vượt giá gói thầu 2% và làm tổng mức đầu tư tăng 1%, thẩm quyền phê duyệt có gì khác nhau?",
    options: [
      "A. Cả 2 tình huống đều do chủ đầu tư quyết định",
      "B. Tình huống (1) do chủ đầu tư quyết định, tình huống (2) phải trình người có thẩm quyền xem xét, quyết định",
      "C. Cả 2 tình huống đều do người có thẩm quyền quyết định",
      "D. Tình huống (1) phải trình người có thẩm quyền cho phép, tình huống (2) do Chủ tịch Uỷ ban nhân dân tỉnh quyết định",
    ],
    answer: "B",
  },
  {
    STT: "292",
    question:
      "Loại hợp đồng nào được áp dụng khi tại thời điểm lựa chọn nhà thầu chưa đủ cơ sở xác định phạm vi công việc, nhu cầu cần thiết về các yếu tố, chi phí đầu vào để thực hiện các công việc dự kiến của hợp đồng?",
    options: [
      "A. Hợp đồng trọn gói",
      "B. Hợp đồng theo chi phí cộng phí",
      "C. Hợp đồng theo đơn giá cố định",
      "D. Hợp đồng theo kết quả đầu ra",
    ],
    answer: "B",
  },
  {
    STT: "293",
    question:
      "Gói thầu xây lắp A được phê duyệt KHLCNT với thời gian thực hiện gói thầu là 120 ngày. Trong quá trình thực hiện Hợp đồng, do có phát sinh dẫn tới thời gian thực hiện gói thầu bị kéo dài thành 180 ngày. Trong trường hợp này, chủ đầu tư xử lý như thế nào?",
    options: [
      "A. Báo cáo người có thẩm quyền trước khi điều chỉnh thời gian thực hiện gói thầu trong kế hoạch lựa chọn nhà thầu đã được phê duyệt",
      "B. Chủ đầu tư thực hiện điều chỉnh thời gian thực hiện gói thầu trong kế hoạch lựa chọn nhà thầu đã được phê duyệt mà không cần báo cáo người có thẩm quyền",
      "C. Chủ đầu tư không cần điều chỉnh kế hoạch lựa chọn nhà thầu",
      "D. Các phương án trên đều sai",
    ],
    answer: "C",
  },
  {
    STT: "294",
    question:
      "Gói thầu áp dụng hình thức chào giá trực tuyến rút gọn, việc phê duyệt kết quả lựa chọn nhà thầu thực hiện như thế nào?",
    options: [
      "A. Trên cơ sở đề nghị của tổ chuyên gia",
      "B. Trên cơ sở đề nghị của tổ thẩm định",
      "C. Trên cơ sở chấp thuận được trao hợp đồng của nhà thầu",
      "D. Phương án A và B đều đúng",
    ],
    answer: "C",
  },
  {
    STT: "295",
    question:
      "Việc xét duyệt trúng thầu đối với gói thầu áp dụng hình thức chào giá trực tuyến theo quy trình rút gọn thực hiện như thế nào?",
    options: [
      "A. Căn cứ vào giá dự thầu trong đơn dự thầu của nhà thầu",
      "B. Căn cứ vào giá gói thầu trong kế hoạch lựa chọn nhà thầu được phê duyệt",
      "C. Căn cứ vào giá dự thầu tại thời điểm kết thúc chào giá trực tuyến của nhà thầu xếp thứ nhất",
      "D. Các phương án trên đều sai",
    ],
    answer: "C",
  },
  {
    STT: "296",
    question: "Nhận định nào sau đây là đúng về mua sắm trực tuyến?",
    options: [
      "A. Việc áp dụng mua sắm trực tuyến không cần phê duyệt trong kế hoạch lựa chọn nhà thầu và được áp dụng đối với hàng hóa, dịch vụ tư vấn không quá 500 triệu đồng",
      "B. Việc áp dụng mua sắm trực tuyến phải được phê duyệt trong kế hoạch lựa chọn nhà thầu và được áp dụng đối với gói thầu mua sắm hàng hóa, gói thầu dịch vụ tư vấn thuộc dự toán mua sắm không quá 500 triệu đồng",
      "C. Mua sắm trực tuyến phải được phê duyệt trong kế hoạch lựa chọn nhà thầu và được áp dụng đối với gói thầu mua sắm hàng hóa, gói thầu dịch vụ tư vấn thuộc dự toán không quá 01 tỷ đồng",
      "D. Các phương án trên đều sai",
    ],
    answer: "B",
  },
  {
    STT: "297",
    question:
      "Trường hợp gói thầu có giá gói thầu dưới 500 triệu đồng đối với dự toán mua sắm thì chủ đầu tư được quyết định cho phép nhà thầu nào sau đây được tham dự thầu?",
    options: [
      "A. Nhà thầu có từ 50% lao động trở lên là người khuyết tật, thương binh, dân tộc thiểu số... có hợp đồng từ 03 tháng trở lên và đến thời điểm đóng thầu vẫn còn hiệu lực",
      "B. Nhà thầu có từ 25% lao động trở lên là người khuyết tật, thương binh, dân tộc thiểu số... có hợp đồng từ 03 tháng trở lên",
      "C. Nhà thầu có từ 50% lao động trở lên... có hợp đồng dưới 03 tháng",
      "D. Nhà thầu có từ 25% lao động trở lên... có hợp đồng dưới 03 tháng",
    ],
    answer: "A",
  },
  {
    STT: "298",
    question:
      "Trường hợp nào sau đây nhà thầu bị coi là không đáp ứng tư cách hợp lệ khi tham dự thầu theo quy định tại khoản 1 Điều 5 của Luật Đấu thầu?",
    options: [
      "A. Nhà thầu A sử dụng tài khoản tham gia Hệ thống của chi nhánh B để tham dự thầu",
      "B. Nhà thầu A sử dụng tài khoản tham gia Hệ thống của chính đơn vị mình để tham dự thầu",
      "C. Nhà thầu A sử dụng tài khoản tham gia Hệ thống của công ty con hạch toán phụ thuộc C để tham dự thầu",
      "D. Đáp án A và C là đúng",
    ],
    answer: "D",
  },
  {
    STT: "299",
    question:
      "E-HSMT gói thầu mua sắm hàng hóa có yêu cầu cung cấp hàng mẫu, trong trường hợp này hàng mẫu được nhà thầu gửi đến chủ đầu tư theo cách thức nào sau đây là phù hợp?",
    options: [
      "A. Nhà thầu có thể nộp bổ sung hàng mẫu trong thời hạn 05 ngày làm việc sau thời điểm đóng thầu",
      "B. Nhà thầu phải nộp hàng mẫu ngay sau khi nộp thành công E-HSDT trên Hệ thống",
      "C. Nhà thầu nộp hàng mẫu trong thời hạn 05 ngày sau khi nộp thành công E-HSDT trên Hệ thống",
      "D. Các phương án trên đều sai",
    ],
    answer: "A",
  },
  {
    STT: "300",
    question:
      "Đối với đấu thầu không qua mạng, biên bản mở thầu bắt buộc phải có chữ ký của các chủ thể nào sau đây?",
    options: [
      "A. Chủ đầu tư, tổ chuyên gia và các nhà thầu tham dự lễ mở thầu",
      "B. Chủ đầu tư, tổ chuyên gia và các nhà thầu tham dự thầu",
      "C. Chủ đầu tư và các nhà thầu tham dự lễ mở thầu",
      "D. Các phương án trên đều đúng",
    ],
    answer: "C",
  },
  {
    STT: "301",
    question: "Đối với đấu thầu qua mạng, nội dung nào sau đây là đúng?",
    options: [
      "A. Việc đánh giá HSDT được thực hiện trên bản chụp",
      "B. Nhà thầu phải chịu trách nhiệm về tính thống nhất giữa bản gốc và bản chụp",
      "C. Trường hợp có sự sai khác giữa bản gốc và bản chụp nhưng không làm thay đổi thứ tự xếp hạng thì căn cứ vào bản gốc để đánh giá",
      "D. Các phương án trên đều sai",
    ],
    answer: "D",
  },
  {
    STT: "302",
    question:
      "Đối với nhà thầu liên danh, việc ký kết văn bản hợp đồng được thực hiện như thế nào?",
    options: [
      "A. Các thành viên liên danh có thể ủy quyền cho thành viên đứng đầu liên danh ký, đóng dấu (nếu có)",
      "B. Tất cả thành viên tham gia liên danh phải trực tiếp ký, đóng dấu (nếu có)",
      "C. Các thành viên liên danh có thể ủy quyền cho bất kỳ thành viên nào trong liên danh ký",
      "D. Bất kỳ thành viên nào trong liên danh cũng có thể đại diện ký",
    ],
    answer: "B",
  },
  {
    STT: "303",
    question:
      "Nhà thầu thực hiện gói thầu xây lắp theo hình thức lựa chọn nhà thầu nào thì không phải thực hiện bảo đảm thực hiện hợp đồng?",
    options: [
      "A. Đấu thầu rộng rãi",
      "B. Tự thực hiện",
      "C. Đấu thầu hạn chế",
      "D. Chào hàng cạnh tranh",
    ],
    answer: "B",
  },
  {
    STT: "304",
    question:
      "Chào giá trực tuyến theo quy trình thông thường được thực hiện ở bước nào trong quá trình lựa chọn nhà thầu?",
    options: [
      "A. Bước chuẩn bị lựa chọn nhà thầu",
      "B. Bước đánh giá về tài chính",
      "C. Bước thương thảo hợp đồng",
      "D. Bước đánh giá hồ sơ đề xuất kỹ thuật",
    ],
    answer: "B",
  },
  {
    STT: "305",
    question:
      "Trong quá trình chào giá trực tuyến, thông tin nào của nhà thầu không được công khai trên Hệ thống mạng đấu thầu quốc gia?",
    options: [
      "A. Mức giá chào",
      "B. Tên nhà thầu",
      "C. Các yếu tố khác ngoài giá (nếu có)",
      "D. Thời gian còn lại của phiên chào giá",
    ],
    answer: "B",
  },
  {
    STT: "306",
    question:
      "Mua sắm trực tuyến có cần được phê duyệt trong kế hoạch lựa chọn nhà thầu không?",
    options: [
      "A. Không phải phê duyệt trong kế hoạch lựa chọn nhà thầu",
      "B. Phải được phê duyệt trong kế hoạch lựa chọn nhà thầu",
      "C. Chỉ phải phê duyệt khi giá gói thầu lớn hơn 500 triệu đồng",
      "D. Chỉ phải phê duyệt đối với các gói thầu thuộc dự án đầu tư",
    ],
    answer: "B",
  },
  {
    STT: "307",
    question:
      "Khi có yêu cầu đặt hàng trong mua sắm trực tuyến, Hệ thống mạng đấu thầu quốc gia sẽ tự động gửi thông báo cho ai?",
    options: [
      "A. Nhà thầu đã trúng thầu thông qua hình thức mua sắm tập trung hoặc không tập trung trên Hệ thống",
      "B. Nhà thầu đã trúng thầu trong mua sắm tập trung trước đó",
      "C. Chủ đầu tư",
      "D. Đơn vị mua sắm tập trung",
    ],
    answer: "B",
  },
  {
    STT: "308",
    question:
      "Sau khi nhận được yêu cầu đặt hàng qua hình thức mua sắm trực tuyến, nhà thầu có bao nhiêu thời gian để xác nhận hoặc từ chối đơn hàng?",
    options: [
      "A. 24 giờ",
      "B. 03 ngày làm việc",
      "C. 05 ngày",
      "D. 05 ngày làm việc",
    ],
    answer: "B",
  },
  {
    STT: "309",
    question:
      "Sau khi kết thúc chào giá trực tuyến, nếu có nhiều nhà thầu cùng chào giá thấp nhất bằng nhau, nhà thầu nào sẽ được xếp hạng thứ nhất?",
    options: [
      "A. Nhà thầu có năng lực tài chính tốt nhất",
      "B. Nhà thầu chào giá đầu tiên thấp nhất",
      "C. Nhà thầu nộp hồ sơ dự thầu sớm nhất",
      "D. Yêu cầu các nhà thầu này chào lại giá",
    ],
    answer: "B",
  },
  {
    STT: "310",
    question:
      "Chủ đầu tư phải gửi thông báo mời tham gia chào giá trực tuyến theo quy trình thông thường đến các nhà thầu đáp ứng yêu cầu kỹ thuật trong thời hạn tối thiểu bao lâu trước thời điểm bắt đầu chào giá?",
    options: [
      "A. 24 giờ",
      "B. 03 ngày làm việc",
      "C. 05 ngày",
      "D. 05 ngày làm việc",
    ],
    answer: "B",
  },
  {
    STT: "311",
    question:
      "Đối với đấu thầu rộng rãi không qua mạng, nếu sau khi đóng thầu, nhà thầu tự phát hiện hồ sơ dự thầu thiếu tài liệu chứng minh năng lực, kinh nghiệm thì nhà thầu nên làm gì?",
    options: [
      "A. Trường hợp chủ đầu tư có yêu cầu bổ sung, làm rõ nhà thầu mới được bổ sung tài liệu",
      "B. Được phép gửi tài liệu đến chủ đầu tư để làm rõ về năng lực, kinh nghiệm",
      "C. Không được bổ sung tài liệu chứng minh năng lực, kinh nghiệm còn thiếu",
      "D. Rút hồ sơ dự thầu để nộp lại",
    ],
    answer: "B",
  },
  {
    STT: "312",
    question:
      "Trường hợp nào nhà thầu được quyền từ chối hoàn thiện hợp đồng mà không bị đánh giá về uy tín khi tham dự thầu, không bị tịch thu bảo đảm dự thầu?",
    options: [
      "A. Nhà thầu được quyền từ chối hoàn thiện hợp đồng trong mọi trường hợp",
      "B. Khi chủ đầu tư đưa ra các yêu cầu khi hoàn thiện hợp đồng không phù hợp với nội dung HSMT, HSDT",
      "C. Khi nhà thầu đề nghị điều chỉnh đơn giá hạng mục đã chào nhưng chủ đầu tư không chấp nhận",
      "D. Phương án B và C đều đúng",
    ],
    answer: "B",
  },
  {
    STT: "313",
    question:
      "Đối với đấu thầu không qua mạng, trường hợp HSDT của nhà thầu có sai lệch thiếu, sau khi hiệu chỉnh vẫn xếp thứ nhất và không có đơn giá của phần sai lệch thiếu, đơn giá nào sẽ được ưu tiên áp dụng đầu tiên?",
    options: [
      "A. Đơn giá trong dự toán gói thầu",
      "B. Đơn giá tương ứng có giá trị thấp nhất trong các HSDT khác vượt qua bước kỹ thuật",
      "C. Đơn giá hình thành giá gói thầu",
      "D. Đơn giá tương ứng có giá trị cao nhất trong các HSDT khác vượt qua bước kỹ thuật",
    ],
    answer: "B",
  },
  {
    STT: "314",
    question:
      "Đối với gói thầu bảo hiểm, nhà thầu tham dự thầu có được xuất trình giấy chứng nhận bảo hiểm bảo lãnh do chính mình phát hành không?",
    options: [
      "A. Được dùng nếu nhà thầu là doanh nghiệp bảo hiểm uy tín",
      "B. Không được dùng nếu giá trị từ 50 triệu trở lên, được dùng nếu nhỏ hơn 50 triệu",
      "C. Chỉ được dùng nếu giá trị bảo lãnh nhỏ hơn 50 triệu đồng",
      "D. Tất cả phương án đều sai",
    ],
    answer: "D",
  },
  {
    STT: "315",
    question:
      "Trường hợp sau khi có quyết định phê duyệt KQLCNT, nhà thầu không trúng thầu yêu cầu giải thích lý do cụ thể, chủ đầu tư phải trả lời trong thời hạn bao lâu?",
    options: [
      "A. 02 ngày làm việc kể từ ngày được yêu cầu",
      "B. 03 ngày làm việc kể từ ngày được yêu cầu",
      "C. 05 ngày làm việc kể từ ngày được yêu cầu",
      "D. 07 ngày làm việc kể từ ngày được yêu cầu",
    ],
    answer: "A",
  },
  {
    STT: "316",
    question:
      "Đối với gói thầu đấu thầu trước, nhà thầu có phải thực hiện biện pháp bảo đảm dự thầu không?",
    options: [
      "A. Không phải thực hiện nhưng phải có cam kết trong đơn dự thầu",
      "B. Bắt buộc phải thực hiện",
      "C. Tuỳ thuộc vào quyết định của chủ đầu tư",
      "D. Chỉ phải thực hiện với gói thầu có giá trị bảo đảm dự thầu trên 50 triệu đồng",
    ],
    answer: "A",
  },
  {
    STT: "317",
    question:
      "Trường hợp các nhà thầu chào hàng hóa có cùng ký mã hiệu, hãng, xuất xứ Việt Nam nhưng có nhà thầu không kê khai thuộc đối tượng ưu đãi thì chủ đầu tư xử lý thế nào?",
    options: [
      "A. Không tính ưu đãi của tất cả các nhà thầu tham dự",
      "B. Quyết định cho các nhà thầu không kê khai được làm rõ để có cơ sở đánh giá ưu đãi",
      "C. Chỉ xét ưu đãi cho các nhà thầu đã kê khai",
      "D. Tính ưu đãi cho tất cả nhà thầu mà không cần làm rõ",
    ],
    answer: "B",
  },
  {
    STT: "318",
    question:
      "Đối với đấu thầu qua mạng, tổ trưởng tổ chuyên gia đính kèm bản scan báo cáo đánh giá E-HSDT lên Hệ thống với yêu cầu nào?",
    options: [
      "A. Báo cáo đánh giá có chữ ký của tất cả thành viên trong tổ chuyên gia",
      "B. Báo cáo đánh giá chỉ cần có chữ ký của tổ trưởng tổ chuyên gia",
      "C. Đăng tải báo cáo tổng hợp, không cần kèm theo các phiếu chấm của thành viên",
      "D. Phương án B và C đều đúng",
    ],
    answer: "A",
  },
  {
    STT: "319",
    question:
      "Hiện nay, Việt Nam đã mở cửa thị trường mua sắm chính phủ trong những hiệp định nào?",
    options: [
      "A. Chỉ Hiệp định CPTPP",
      "B. Hiệp định CPTPP và Hiệp định EVFTA",
      "C. Hiệp định CPTPP, EVFTA và UKVFTA",
      "D. Tất cả các hiệp định mà Việt Nam là thành viên",
    ],
    answer: "C",
  },
  {
    STT: "320",
    question:
      "Số lượng các nước thành viên Hiệp định CPTPP ký kết hiệp định ban đầu là bao nhiêu nước?",
    options: ["A. 8 nước", "B. 9 nước", "C. 11 nước", "D. 12 nước"],
    answer: "C",
  },
  {
    STT: "321",
    question:
      "Trong các hiệp định dưới đây, hiệp định nào không có quy định về các trường hợp chỉ định thầu?",
    options: [
      "A. Hiệp định CPTPP",
      "B. Hiệp định EVFTA",
      "C. Hiệp định EVFTA và UKVFTA",
      "D. Hiệp định Đối tác Kinh tế Toàn diện Khu vực (RCEP)",
    ],
    answer: "D",
  },
  {
    STT: "322",
    question:
      "Hoạt động nào sau đây không thuộc phạm vi điều chỉnh của Nghị định số 95/2020/NĐ-CP?",
    options: [
      "A. Mua sắm thiết bị văn phòng",
      "B. Thuê dịch vụ tư vấn",
      "C. Thuê quyền sử dụng đất",
      "D. Mua sắm vật tư y tế",
    ],
    answer: "C",
  },
  {
    STT: "323",
    question:
      "Theo các hiệp định Việt Nam mở cửa thị trường mua sắm chính phủ, nhà thầu nước ngoài được tham gia đấu thầu tại Việt Nam trong trường hợp nào?",
    options: [
      "A. Tất cả các gói thầu",
      "B. Chỉ gói thầu ODA",
      "C. Gói thầu thuộc phạm vi điều chỉnh của hiệp định",
      "D. Gói thầu có giá trị lớn, phức tạp",
    ],
    answer: "C",
  },
  {
    STT: "324",
    question:
      "Theo quy định tại Nghị định số 95/2020/NĐ-CP, đấu thầu nội khối là gì?",
    options: [
      "A. Đấu thầu mà chỉ có nhà thầu nội khối được tham dự",
      "B. Đấu thầu cho các dự án trong khối CPTPP",
      "C. Đấu thầu giữa các nước thành viên EVFTA, UKVFTA",
      "D. Đấu thầu trong nước",
    ],
    answer: "A",
  },
  {
    STT: "325",
    question:
      "Theo Nghị định số 09/2022/NĐ-CP, cơ quan mua sắm phải tổ chức đấu thầu nội khối, trừ trường hợp nào?",
    options: [
      "A. Không có nhà thầu trong nước tham gia",
      "B. Giá gói thầu quá lớn",
      "C. Người có thẩm quyền thấy cần tổ chức đấu thầu quốc tế để mang lại hiệu quả cao hơn",
      "D. Hàng hóa quá phức tạp nhà thầu trong nước không đáp ứng được",
    ],
    answer: "C",
  },
  {
    STT: "326",
    question:
      "Theo Thông tư số 21/2022/TT-BKHĐT, khi nào được đưa ra yêu cầu về nhân sự chủ chốt trong gói thầu dịch vụ phi tư vấn?",
    options: [
      "A. Trong mọi trường hợp",
      "B. Khi giá gói thầu lớn",
      "C. Chỉ khi dịch vụ có yếu tố đặc thù, phức tạp cần thiết phải có nhân sự kinh nghiệm",
      "D. Khi có yêu cầu của nhà thầu",
    ],
    answer: "C",
  },
  {
    STT: "327",
    question: "Hiệp định EVFTA có hiệu lực từ ngày nào?",
    options: ["A. 01/7/2020", "B. 01/8/2020", "C. 01/9/2020", "D. 01/10/2020"],
    answer: "B",
  },
  {
    STT: "328",
    question:
      "Đối với gói thầu mua sắm hàng hóa thuộc UKVFTA tại tháng 9/2025, cơ quan mua sắm lập HSMT theo mẫu ban hành kèm Thông tư nào?",
    options: [
      "A. Thông tư số 09/2020/TT-BKHĐT",
      "B. Thông tư số 12/2022/TT-BKHĐT",
      "C. Thông tư số 15/2022/TT-BKHĐT",
      "D. Thông tư số 20/2022/TT-BKHĐT",
    ],
    answer: "B",
  },
  {
    STT: "329",
    question:
      "Việc đấu thầu thuốc theo EVFTA được Chính phủ giao cơ quan nào hướng dẫn?",
    options: [
      "A. Bộ Tư pháp",
      "B. Bộ Y tế",
      "C. Bộ Tài chính",
      "D. Bộ Công Thương",
    ],
    answer: "B",
  },
  {
    STT: "330",
    question:
      "Việt Nam chính thức trở thành thành viên của Hiệp định mua sắm chính phủ của WTO (GPA) từ năm nào?",
    options: [
      "A. 2018",
      "B. 2019",
      "C. 2020",
      "D. Việt Nam chưa phải là thành viên của GPA",
    ],
    answer: "D",
  },
  {
    STT: "331",
    question:
      "Theo Nghị định số 95/2020/NĐ-CP, khái niệm Nước thành viên không bao gồm:",
    options: [
      "A. Nước thành viên Hiệp định CPTPP",
      "B. Nước thành viên EU",
      "C. Vương quốc Anh và Bắc Ai-len",
      "D. Các nước ASEAN chưa gia nhập Hiệp định CPTPP",
    ],
    answer: "D",
  },
  {
    STT: "332",
    question:
      "Đối với gói thầu thuộc phạm vi điều chỉnh của Hiệp định CPTPP, ngôn ngữ sử dụng trong đấu thầu nội khối là:",
    options: [
      "A. Chỉ tiếng Việt",
      "B. Chỉ tiếng Anh",
      "C. Tiếng Việt; hoặc tiếng Việt và tiếng Anh",
      "D. Bất kỳ ngôn ngữ nào của các nước thành viên",
    ],
    answer: "C",
  },
  {
    STT: "333",
    question:
      "Theo Thông tư số 21/2022/TT-BKHĐT, HSMT gói thầu dịch vụ phi tư vấn không được đưa ra yêu cầu nào sau đây:",
    options: [
      "A. Yêu cầu về năng lực",
      "B. Yêu cầu về kinh nghiệm",
      "C. Yêu cầu nhà thầu phải có kinh nghiệm cung cấp dịch vụ trong lãnh thổ một quốc gia cụ thể",
      "D. Yêu cầu về chất lượng dịch vụ",
    ],
    answer: "C",
  },
  {
    STT: "334",
    question:
      "Trong Hiệp định CPTPP, việc áp dụng biện pháp ưu đãi trong nước được quy định như thế nào?",
    options: [
      "A. Được phép áp dụng vĩnh viễn",
      "B. Không bao giờ được phép áp dụng",
      "C. Được phép áp dụng trong thời gian chuyển tiếp",
      "D. Tùy quy mô, tính chất từng gói thầu",
    ],
    answer: "C",
  },
  {
    STT: "335",
    question:
      "Đối với gói thầu thuộc phạm vi điều chỉnh của CPTPP, Nghị định số 95/2020/NĐ-CP quy định những hình thức lựa chọn nhà thầu nào?",
    options: [
      "A. Đấu thầu hạn chế và chỉ định thầu",
      "B. Chỉ có chỉ định thầu",
      "C. Đấu thầu rộng rãi và chỉ định thầu",
      "D. Chỉ có đấu thầu rộng rãi",
    ],
    answer: "C",
  },
  {
    STT: "336",
    question: "Hiệp định CPTPP có cho phép áp dụng đấu thầu qua mạng không?",
    options: [
      "A. Không cho phép",
      "B. Bắt buộc phải áp dụng",
      "C. Khuyến khích áp dụng",
      "D. Tùy quy mô, tính chất từng gói thầu",
    ],
    answer: "C",
  },
  {
    STT: "337",
    question: "Gói thầu mua thuốc là loại gói thầu nào?",
    options: [
      "A. Gói thầu mua sắm hàng hóa",
      "B. Gói thầu cung cấp dịch vụ phi tư vấn",
      "C. Gói thầu hỗn hợp",
      "D. Gói thầu xây lắp",
    ],
    answer: "A",
  },
  {
    STT: "338",
    question: "Đàm phán giá được áp dụng trong trường hợp nào sau đây?",
    options: [
      "A. Mua vật tư tiêu hao",
      "B. Mua thuốc, thiết bị y tế, vật tư xét nghiệm chỉ có 01 hoặc 02 hãng sản xuất",
      "C. Mua hàng hóa chỉ có 01 hãng sản xuất",
      "D. Mua hàng hóa chỉ có 01 hoặc 02 hãng sản xuất",
    ],
    answer: "B",
  },
  {
    STT: "339",
    question:
      "Thời gian có hiệu lực thi hành của Luật số 90/2025/QH15 là khi nào?",
    options: [
      "A. Từ ngày 01 tháng 7 năm 2025",
      "B. Từ ngày 04 tháng 8 năm 2025",
      "C. Từ ngày 08 tháng 8 năm 2025",
      "D. Tất cả các đáp án trên đều sai",
    ],
    answer: "A",
  },
  {
    STT: "340",
    question:
      "Thông tư số 80/2025/TT-BTC quy định chi tiết mẫu hồ sơ yêu cầu... có hiệu lực từ thời điểm nào?",
    options: [
      "A. Ngày 08/8/2025",
      "B. Ngày 04/8/2025",
      "C. Ngày 01/8/2025",
      "D. Ngày 01/7/2025",
    ],
    answer: "A",
  },
];
