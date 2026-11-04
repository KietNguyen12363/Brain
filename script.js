// --- 🌟 NỀN ĐỘNG CANVAS ---
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
$(window).resize(resizeCanvas);

let particlesArray = [];
const numberOfParticles = 60;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = (Math.random() - 0.5) * 0.8;
    this.speedY = (Math.random() - 0.5) * 0.8;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x > canvas.width) this.x = 0;
    else if (this.x < 0) this.x = canvas.width;
    if (this.y > canvas.height) this.y = 0;
    else if (this.y < 0) this.y = canvas.height;
  }
  draw() {
    ctx.fillStyle = 'rgba(56, 189, 248, 0.5)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  particlesArray = [];
  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push(new Particle());
  }
}
initParticles();

function animateBackground() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();

    for (let j = i; j < particlesArray.length; j++) {
      let dx = particlesArray[i].x - particlesArray[j].x;
      let dy = particlesArray[i].y - particlesArray[j].y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 100) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.15 - distance / 700})`;
        ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animateBackground);
}
animateBackground();


// --- DỮ LIỆU CÂU HỎI ---
const quizData = [
  {
    q: "1. Khi góc làm việc / học tập bị bừa bộn, bạn sẽ xử lý thế nào?",
    options: [
      { text: "A. Gom gọn lại theo từng đống, miễn sao có chỗ đặt laptop làm việc tiếp.", os: "win", label: "Windows" },
      { text: "B. Sắp xếp chỉn chu, căn chỉnh màu sắc và decor đẹp mắt mới vào việc.", os: "mac", label: "macOS" },
      { text: "C. Thiết lập quy trình hoặc kệ lưu trữ riêng biệt để tối ưu diện tích.", os: "linux", label: "Linux" },
      { text: "D. Giữ nguyên trạng thái, bạn nhớ chính xác vị trí từng món đồ mà.", os: "dos", label: "MS-DOS" }
    ]
  },
  {
    q: "2. Khi đối mặt với sự cố đột ngột phát sinh, phản ứng của bạn là:",
    options: [
      { text: "A. Thử các giải pháp phổ biến, nếu treo máy thì tạm nghỉ rồi làm lại.", os: "win", label: "Windows" },
      { text: "B. Tìm cách giải quyết tinh tế, trải nghiệm mượt mà nhất có thể.", os: "mac", label: "macOS" },
      { text: "C. Mổ xẻ bản chất vấn đề, tự suy ra cách xử lý logic theo cách riêng.", os: "linux", label: "Linux" },
      { text: "D. Đưa ra quyết định ngắn gọn, xử lý nhanh nhất không suy nghĩ rườm rà.", os: "dos", label: "MS-DOS" }
    ]
  },
  {
    q: "3. Trong môi trường làm việc / giao tiếp tập thể, bạn thuộc kiểu người:",
    options: [
      { text: "A. Dễ thích nghi, tương thích và phối hợp tốt với hầu hết mọi người.", os: "win", label: "Windows" },
      { text: "B. Chọn lọc bạn đồng hành có cùng gu, cùng phong cách sống.", os: "mac", label: "macOS" },
      { text: "C. Độc lập, thích tự chủ công việc nhưng sẵn sàng chia sẻ tri thức.", os: "linux", label: "Linux" },
      { text: "D. Thẳng thắn, đi thẳng vào vấn đề, không thích nói chuyện xã giao.", os: "dos", label: "MS-DOS" }
    ]
  },
  {
    q: "4. Khi thực hiện một dự án, điều bạn quan tâm nhất là:",
    options: [
      { text: "A. Độ phủ sóng, tính đa dụng và áp dụng được cho số đông.", os: "win", label: "Windows" },
      { text: "B. Thiết kế thẩm mỹ, giao diện đẹp và tính mượt mà.", os: "mac", label: "macOS" },
      { text: "C. Quyền tự do sáng tạo, tùy biến sâu vào lõi hệ thống.", os: "linux", label: "Linux" },
      { text: "D. Tốc độ thực thi tối đa, tối giản chi phí và tài nguyên.", os: "dos", label: "MS-DOS" }
    ]
  },
  {
    q: "5. Khi cần tìm hiểu một kiến thức hoặc công nghệ hoàn toàn mới, bạn thường:",
    options: [
      { text: "A. Lên YouTube xem các video hướng dẫn nhanh (tutorials) làm theo cho chắc.", os: "win", label: "Windows" },
      { text: "B. Tìm kiếm các bài viết đánh giá có hình ảnh đẹp, trực quan và dễ tiếp cận.", os: "mac", label: "macOS" },
      { text: "C. Đọc thẳng documentation (tài liệu gốc) từ nhà phát triển để nắm cơ chế.", os: "linux", label: "Linux" },
      { text: "D. Đọc lướt qua phần cốt lõi nhất rồi nhảy vào thực hành luôn.", os: "dos", label: "MS-DOS" }
    ]
  },
  {
    q: "6. Phong cách quản lý thời gian và lịch trình hằng ngày của bạn thế nào?",
    options: [
      { text: "A. Dùng chung một ứng dụng lịch hoặc ghi chú để nhắc nhở việc chung.", os: "win", label: "Windows" },
      { text: "B. Lên lịch rất tỉ mỉ, đồng bộ trên các thiết bị với giao diện tối giản.", os: "mac", label: "macOS" },
      { text: "C. Tự code script hoặc dùng các công cụ dòng lệnh riêng biệt để tối ưu.", os: "linux", label: "Linux" },
      { text: "D. Ghi nhớ trong đầu hoặc viết nhanh ra một mẩu giấy nhỏ cạnh bàn.", os: "dos", label: "MS-DOS" }
    ]
  },
  {
    q: "7. Khi chọn mua một món đồ công nghệ hoặc vật dụng cá nhân, tiêu chí hàng đầu của bạn là gì?",
    options: [
      { text: "A. Cấu hình tốt trong tầm giá, dễ mua, dễ sửa chữa và nhiều người dùng.", os: "win", label: "Windows" },
      { text: "B. Thiết kế sang trọng, thương hiệu uy tín và trải nghiệm cầm nắm tuyệt vời.", os: "mac", label: "macOS" },
      { text: "C. Khả năng phần cứng mở, dễ nâng cấp, tùy biến theo ý thích.", os: "linux", label: "Linux" },
      { text: "D. Bền bỉ, dùng đúng một chức năng chính thật tốt là đủ.", os: "dos", label: "MS-DOS" }
    ]
  },
  {
    q: "8. Khi bạn cảm thấy kiệt sức (stress) sau những giờ làm việc căng thẳng, cách 'F5' não bộ của bạn là:",
    options: [
      { text: "A. Lướt mạng xã hội, xem phim hoặc chơi game giải trí nhẹ nhàng.", os: "win", label: "Windows" },
      { text: "B. Nghe nhạc lofi, đi cà phê ở một không gian yên tĩnh, có gu.", os: "mac", label: "macOS" },
      { text: "C. Ngồi mày mò một dự án cá nhân hoặc tìm hiểu một thuật toán thú vị.", os: "linux", label: "Linux" },
      { text: "D. Tắt toàn bộ thông báo điện thoại, ngủ một giấc sâu để nạp lại năng lượng.", os: "dos", label: "MS-DOS" }
    ]
  },
  {
    q: "9. Phản ứng của bạn khi gặp một ý kiến trái chiều hoặc chỉ trích là gì?",
    options: [
      { text: "A. Lắng nghe, tiếp thu phần hợp lý để dĩ hòa vi quý.", os: "win", label: "Windows" },
      { text: "B. Cảm thấy bị ảnh hưởng cảm xúc nhẹ, chọn cách im lặng hoặc giải thích tinh tế.", os: "mac", label: "macOS" },
      { text: "C. Dùng số liệu và logic sắc bén để tranh luận đến cùng xem ai đúng ai sai.", os: "linux", label: "Linux" },
      { text: "D. Phớt lờ nếu thấy không quan trọng, không thích đôi co mất thời gian.", os: "dos", label: "MS-DOS" }
    ]
  },
  {
    q: "10. Mục tiêu lớn nhất mà bạn hướng tới trong công việc và cuộc sống là gì?",
    options: [
      { text: "A. Trở thành một người đa năng, linh hoạt, thích nghi được với mọi biến động.", os: "win", label: "Windows" },
      { text: "B. Xây dựng một phong cách sống tinh tế, chất lượng và đầy cảm hứng.", os: "mac", label: "macOS" },
      { text: "C. Làm chủ tri thức chuyên sâu, tự do sáng tạo ra những giá trị độc bản.", os: "linux", label: "Linux" },
      { text: "D. Đạt hiệu suất cao nhất với sự tối giản và gọn gàng tuyệt đối.", os: "dos", label: "MS-DOS" }
    ]
  }
];

let currentQ = 0;
let scores = { win: 0, mac: 0, linux: 0, dos: 0 };
let userHistory = [];
let isLocked = false; // Chặn bấm khi đang chuyển câu

$(document).on('click', '#start-btn', function() {
  $('#welcome-box').fadeOut(300, function() {
    $('#quiz-container').fadeIn(300);
    loadQuestion();
  });
});

function loadQuestion() {
  if (currentQ < quizData.length) {
    let percent = ((currentQ) / quizData.length) * 100;
    $('#progress').css('width', percent + '%');
    $('#q-count').text(`Câu hỏi ${currentQ + 1} / ${quizData.length}`);

    $('#question-box').fadeOut(150, function() {
      let item = quizData[currentQ];
      $('#q-title').text(item.q);
      $('#options-container').empty();

      item.options.forEach(opt => {
        $('#options-container').append(
          `<button class="option-btn" data-os="${opt.os}" data-text="${opt.text}" data-label="${opt.label}">${opt.text}</button>`
        );
      });
      $(this).fadeIn(150, function() { isLocked = false; });
    });
  } else {
    $('#progress').css('width', '100%');
    $('#q-count').text('Hoàn thành khảo sát');
    showResult();
  }
}

$(document).on('click', '.option-btn', function() {
  if (isLocked) return;
  isLocked = true;

  let selectedOS = $(this).data('os');
  let selectedText = $(this).data('text');
  let selectedLabel = $(this).data('label');

  scores[selectedOS]++;
  userHistory.push({
    question: quizData[currentQ].q,
    choice: selectedText,
    osName: selectedLabel
  });

  currentQ++;
  loadQuestion();
});

function showResult() {
  $('#quiz-container').slideUp(300, function() {
    let maxScore = Math.max(...Object.values(scores));
    let tiedOS = Object.keys(scores).filter(k => scores[k] === maxScore); // Các hệ bằng điểm cao nhất

    // Dữ liệu OS bao gồm cả ĐƯỜNG DẪN ẢNH (img)
    let osResult = {
      win: {
        name: "🪟 Windows OS (Đa Năng & Thực Tế)",
        desc: "Bộ não bạn giống như một chiếc PC Windows quốc dân: Đa nhiệm, tương thích cực tốt với mọi hoàn cảnh và con người. Bạn thực tế, dễ thích nghi, tuy nhiên đôi khi nhận quá nhiều tác vụ cùng lúc có thể khiến bạn gặp trạng thái 'Not Responding' tạm thời!",
        img: "https://upload.wikimedia.org/wikipedia/commons/8/87/Windows_logo_-_2021.svg"
      },
      mac: {
        name: "🍎 macOS (Tinh Tế & Thẩm Mỹ)",
        desc: "Bộ não bạn chú trọng vào cái đẹp, sự mượt mà và cảm xúc. Bạn xử lý công việc rất chỉn chu, yêu thích sự tối giản tinh tế và trải nghiệm cá nhân hóa cao. Bạn chỉ thực sự tỏa sáng khi ở trong môi trường phù hợp với gu của mình.",
        img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
      },
      linux: {
        name: "🐧 Linux OS (Tự Do & Logic Lõi)",
        desc: "Bộ não bạn giống như một hệ thống mã nguồn mở đầy tự chủ! Bạn cực kỳ logic, thích đào sâu vào bản chất kỹ thuật thay vì nhìn bề ngoài. Bạn ghét sự gò bó, thích tự mày mò và tối ưu hóa cuộc sống theo cách độc lập của riêng mình.",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg"
      },
      dos: {
        name: "📟 MS-DOS / OS Cổ Điển (Tối Giản & Tốc Độ)",
        desc: "Bộ não bạn hoạt động theo dạng dòng lệnh thuần túy! Bạn cực kỳ thẳng thắn, xử lý thông tin với tốc độ nhanh chóng, đi thẳng vào cốt lõi vấn đề và bỏ qua mọi chi tiết rườm rà. Bạn là người quyết đoán và tập trung cao độ.",
        img: "https://cdn-icons-png.flaticon.com/512/6124/6124995.png"
      }
    };

    // Chọn kết quả: 1 hệ thắng rõ ràng, hoặc Dual/Multi Boot khi hoà điểm
    let osShort = { win: "Windows", mac: "macOS", linux: "Linux", dos: "MS-DOS" };
    let result;
    if (tiedOS.length === 1) {
      result = osResult[tiedOS[0]];
    } else {
      let tiedNames = tiedOS.map(k => osShort[k]);
      let tiedText = tiedNames.slice(0, -1).join(", ") + " và " + tiedNames[tiedNames.length - 1];
      let bootType = tiedOS.length === 2 ? "Dual Boot" : "Multi-Boot";
      let bootSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">'
        + '<circle cx="48" cy="64" r="36" fill="#38bdf8" fill-opacity="0.75"/>'
        + '<circle cx="80" cy="64" r="36" fill="#0284c7" fill-opacity="0.75"/>'
        + '<circle cx="64" cy="64" r="8" fill="none" stroke="#f8fafc" stroke-width="4"/>'
        + '<line x1="64" y1="40" x2="64" y2="62" stroke="#f8fafc" stroke-width="4" stroke-linecap="round"/>'
        + '</svg>';
      result = {
        name: "💽 " + bootType + " (Đa Hệ & Linh Hoạt)",
        desc: "Bộ não bạn đang cài song song nhiều hệ điều hành! Điểm số của bạn hoà giữa " + tiedText + ", nên bạn linh hoạt chuyển đổi giữa các phong cách tư duy tuỳ hoàn cảnh. Mỗi lần khởi động, bạn có thể là một phiên bản khác nhau của chính mình!",
        img: "data:image/svg+xml;utf8," + encodeURIComponent(bootSvg)
      };
    }

    // Render thông tin & gán nguồn ảnh
    $('#os-badge').text(result.name);
    $('#os-desc').text(result.desc);
    $('#os-image').attr('src', result.img);

    // Render Bảng Thống Kê
    let tbodyHtml = '';
    userHistory.forEach((item, index) => {
      tbodyHtml += `
        <tr>
          <td><strong>C${index + 1}</strong></td>
          <td>${item.choice}</td>
          <td><span style="color: #38bdf8; font-weight: bold;">${item.osName}</span></td>
        </tr>
      `;
    });
    $('#summary-tbody').html(tbodyHtml);

    $('#result-box').fadeIn(300);
  });
}