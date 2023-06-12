import Footer from "../components/Footer";
import Header from "../components/Header";

const HomePage = () => {
    return `
    ${Header()}
    
    <h1 class="tw-text-center">Home Page</h1>
    <img src="https://picsum.photos/1500/300" alt="">
    <div class="section" id="about">
  <div class="container">
    <div class="card" data-aos="fade-up" data-aos-offset="10">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="card-body">
            <div class="h4 mt-0 title">Về tôi</div>
            <p>Xin chào. Tên tôi là Lê Đức Tâm. Tôi là một lập trình viên Font-End.</p>
            <p>Tôi có niềm đam mê với máy tính từ khi còn là học sinh. Vậy nên tôi đã lựa chọn ngành
              lập trình là bước đi chính trong tương lai của mình. Ước mơ của tôi được nung nấu tại
              ngôi người Cao Đẳng FPT, ngoài học trên trường tôi còn tìm hiểu các khóa học bên ngoài
              như F8, Udemy ... để phát triển kỹ năng.</p>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="card-body">
            <div class="h4 mt-0 title">Thông tin cơ bản</div>
            <div class="row">
              <div class="col-sm-4"><strong class="text-uppercase">Age:</strong></div>
              <div class="col-sm-8">20</div>
            </div>
            <div class="row mt-3">
              <div class="col-sm-4"><strong class="text-uppercase">Email:</strong></div>
              <div class="col-sm-8">tamldph29582@fpt.edu.vn</div>
            </div>
            <div class="row mt-3">
              <div class="col-sm-4"><strong class="text-uppercase">Phone:</strong></div>
              <div class="col-sm-8">0388709370</div>
            </div>
            <div class="row mt-3">
              <div class="col-sm-4"><strong class="text-uppercase">Address:</strong></div>
              <div class="col-sm-8">Đỗ Sơn - Thanh Ba - Phú Thọ</div>
            </div>
            <div class="row mt-3">
              <div class="col-sm-4"><strong class="text-uppercase">Language:</strong></div>
              <div class="col-sm-8">Tiếng việt, Tiếng Anh ( cơ bản )</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    ${Footer()}
    `;
};
export default HomePage;
