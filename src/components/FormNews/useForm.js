import { useState } from "react";
import { addNew, modifyNew } from "../../services/Axios/NewsForm";
import validateForm from "../../helpers/formNews/validationForm";

export const useForm = (data) => {
  const [contentError, setContentError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState(null);
  const [dataForm, setDataForm] = useState({
    name: data ? data.name : "",
    category: data ? data.category : "News",
    content: data ? data.content : "",
  });

  //insertar imagen
  const handleFile = (e) => {
    setFiles(e);
  };
  const insertFile = async () => {
    const f = new FormData();
    if (files) {
      files.forEach((element) => {
        f.append("image", element);
        setDataForm({ ...dataForm, image: f });
      });
    }
  };

  const handleInput = (e) => {
    setDataForm({ ...dataForm, name: e.target.value });
  };
  const handleInputCategory = (e) => {
    setDataForm({ ...dataForm, category: e.target.value });
  };
  const handleEditorData = (e) => {
    setDataForm({ ...dataForm, content: e.editor.getData() });
  };

  const handleSubmit = () => {
    insertFile();
    validateForm(dataForm)
      .then(async () => {
        setLoading(true);
        setNameError(false);
        setContentError(false);
        setImageError(false);
        setCategoryError(false);
        if (data) {
          await modifyNew(dataForm);
        } else {
          await addNew(dataForm);
        }
        setLoading(false);
      })
      .catch((error) => {
        setNameError(error.name);
        setContentError(error.content);
        setImageError(error.image);
        setCategoryError(error.category);

      });
  };

  return {
    handleInput,
    handleEditorData,
    handleFile,
    handleInputCategory,
    handleSubmit,
    contentError,
    nameError,
    imageError,
    categoryError,
    loading,
    files,
    dataForm,
  };
};
export default useForm;
