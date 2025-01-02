// import InputError from "@components/InputError";
import useAxiosInstance from "@hooks/useAxiosInstance";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const axios = useAxiosInstance();
  const addUser = useMutation({
    mutationFn: async (userInfo) => {
      userInfo.type = "user";
      console.log(userInfo);
      return axios.post(`/users`, userInfo);
    },
    onSuccess: () => {
      alert("회원가입 완료");
      navigate(`/users/login`); // 회원가입 완료하면 로그인 페이지로 이동
    },
    onError: (err) => {
      console.error("에러 내용 : ", err);
      if (err.response?.data.errors) {
        err.response?.data.errors.forEach((error) => setError(error.path, { message: error.msg }));
      } else {
        alert(err.response?.data.message || "잠시후 다시 요청하세요.");
      }
    },
  });

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="signup w-screen max-w-[393px] h-screen bg-background-color font-laundry">
        <div className="signup__content p-6 pt-[50px] flex flex-col items-center justify-center">
          <h1 className="signup__title text-[36px] font-bold text-primary-500 leading-normal tracking-[-2.88px] text-center">
            오는길에
          </h1>
          <section className="mt-6 px-4">
            <form className="space-y-5" onSubmit={handleSubmit(addUser.mutate)}>
              {/* 이메일 입력 */}
              <div>
                <label htmlFor="email">이메일</label>
                <input
                  type="email"
                  id="email"
                  {...register("email", { required: "이메일을 입력해주세요." })}
                  placeholder="이메일을 입력하세요"
                  className="mt-1 block w-full p-3 border text-gray-700 border-gray-300 rounded-[10px] bg-white shadow-card-shadow"
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>

              {/* 비밀번호 입력 */}
              <div>
                <label htmlFor="password">비밀번호</label>
                <input
                  type="password"
                  id="password"
                  {...register("password", { required: "비밀번호를 입력해주세요." })}
                  placeholder="비밀번호를 입력하세요"
                  className="mt-1 block w-full p-3 border text-gray-700 border-gray-300 rounded-[10px] bg-white shadow-card-shadow"
                />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
              </div>

              {/* 비밀번호 확인 */}
              <div>
                <label htmlFor="confirmPassword">비밀번호 확인</label>
                <input
                  type="password"
                  id="confirmPassword"
                  {...register("confirmPassword", { required: "비밀번호를 확인해주세요." })}
                  placeholder="비밀번호를 확인하세요"
                  className="mt-1 block w-full p-3 border text-gray-700 border-gray-300 rounded-[10px] bg-white shadow-card-shadow"
                />
                {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
              </div>

              {/* 이름 */}
              <div>
                <label htmlFor="name">이름</label>
                <input
                  type="name"
                  id="name"
                  {...register("name", { required: "이름을 입력해주세요." })}
                  placeholder="이름을 입력하세요"
                  className="mt-1 block w-full p-3 border text-gray-700 border-gray-300 rounded-[10px] bg-white shadow-card-shadow"
                />
                {errors.confirmPassword && <p className="text-red-500">{errors.name.message}</p>}
              </div>

              {/* 핸드폰 번호 입력 */}
              <div>
                <label htmlFor="phone">핸드폰 번호</label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone")}
                  placeholder="핸드폰 번호를 입력하세요"
                  className="mt-1 block w-full p-3 border text-gray-700 border-gray-300 rounded-[10px] bg-white shadow-card-shadow"
                />
                {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
              </div>

              {/* 주소 입력 */}
              <div>
                <label htmlFor="address">주소</label>
                <input
                  type="text"
                  id="address"
                  {...register("address")}
                  placeholder="주소를 입력하세요"
                  className="mt-1 block w-full p-3 border text-gray-700 border-gray-300 rounded-[10px] bg-white shadow-card-shadow"
                />
                {errors.address && <p className="text-red-500">{errors.address.message}</p>}
              </div>

              {/* 회원가입 버튼 */}
              <div>
                <button type="submit" className="w-full h-14 bg-primary-500 text-white rounded-[10px]">
                  회원가입
                </button>
              </div>
            </form>
          </section>
          <footer className="flex justify-center mt-4 text-sm text-gray-500">
            <p>
              이미 계정이 있나요?{" "}
              <Link to="/users/login" className="text-primary-500">
                로그인
              </Link>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
