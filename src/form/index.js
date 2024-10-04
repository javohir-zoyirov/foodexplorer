import { useNavigate } from "react-router";
import { Nav } from "../header";
import { Button, Dropdown, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./form.css";
import TextArea from "antd/es/input/TextArea";
import { Footer } from "../footer";
export const Form = () => {
  const navigate = useNavigate();
  const props = {
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    onChange({ file, fileList }) {
      if (file.status !== "uploading") {
        console.log(file, fileList);
      }
    },
  };
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      ),
    },
  ];
  return (
    <div style={{ background: "#000A0F", height: "100vh" }} className="">
      <Nav />

      <div className="container">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="text-white fw-bold btn btn-outline border-0 text-start mt-4"
        >
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

        <div>
          <h2 className="text-white p-0 m-0">Editar prato</h2>
          <div className="d-flex align-items-center justify-content-between mt-4">
            <Upload {...props}>
              <p className="text-white p-0 mb-2">Imagem do prato</p>
              <button
                style={{ background: "#0D161B" }}
                className="btn text-white border-0 px-4 mt-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-upload"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                  <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
                </svg>
                <span className="ps-2 m-0">Selecione imagem</span>
              </button>
            </Upload>
            <div className="w-50">
              <p className="text-white p-0 m-0">Nome</p>
              <input
                style={{ background: "#0D161B" }}
                className="form-control border-0 form1 w-100 mt-3"
                placeholder="Salada Ceasar"
              />
            </div>
            <div className="">
              <p className="text-white p-0 m-0">Categoria</p>
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottom"
                className=" mt-3"
              >
                <button
                  style={{ background: "#0D161B" }}
                  className="btn border-0 text-white px-4"
                >
                  Refeição{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                </button>
              </Dropdown>
            </div>
          </div>
        </div>

        <div>
          <p className="text-white">Ingredientes</p>
        </div>

        <div>
          <p className="text-white">Descrição</p>
          <TextArea
        placeholder="A Salada César é uma opção refrescante para o verão."
        autoSize={{
          minRows: 3,
          maxRows: 5,
        }}
        />
        </div>
        <div className="mt-4 d-flex gap-3 align-items-end justify-content-end">
          <button style={{background:"#0D161B"}} className="btn border-0 text-white">Excluir prato</button>
          <button disabled style={{background:"#750310"}} className="btn border-0 text-white">Salvar alterações</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
