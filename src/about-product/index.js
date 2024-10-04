import { useNavigate } from "react-router";
import { Footer } from "../footer";
import { Nav } from "../header";
import dish from "../image/Dish.png"
export const AboutProduct = () => {
  const navigate = useNavigate('')
  return (
    <div style={{ background: "#000A0F", height:"100vh" }}>
      <div style={{height:"100vh"}} className="container d-flex justify-content-between flex-column">
        <Nav/>  
        <button onClick={() => {navigate("/")}} className="text-white fw-bold btn btn-outline border-0 text-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
          </svg>{" "}
          voltar
        </button>

        <div className="d-flex align-items-center justify-content-between gap-5 my-5">
            <div style={{width:"30%"}} className="">
                <img src={dish} className="w-100 object-fit-cover" />
            </div>
            <div style={{width:"70%"}} className="">
                <h2 className="text-white">Salada Ravanello</h2>
                <p className="text-white">Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
                <div className="d-flex align-items-center gap-3">
                    <span style={{background:"#192227"}} className="p-1 rounded text-white">alface</span>
                    <span style={{background:"#192227"}} className="p-1 rounded text-white">cebola</span>
                    <span style={{background:"#192227"}} className="p-1 rounded text-white">pão naan</span>
                    <span style={{background:"#192227"}} className="p-1 rounded text-white">pepino</span>
                    <span style={{background:"#192227"}} className="p-1 rounded text-white">rabanete</span>
                    <span style={{background:"#192227"}} className="p-1 rounded text-white">tomate</span>
                </div>
                <button onClick={() => {navigate('/prato')}} style={{background:"#750310"}} className="btn border-0 mt-5 text-white fw-bold">Editar prato</button>
            </div>
        </div>
          <Footer/>
      </div>
    </div>
  );
};
