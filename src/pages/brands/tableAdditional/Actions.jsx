const Actions = ({ rowData }) => {
  return (
    <>
      <i 
      className="fas fa-edit text-warning mx-1 hoverable_text pointer"
      title="ویرایش برند"
      data-bs-placement="modal"
      data-bs-target="#add_brands"
      ></i>
      <i 
      className="fas fa-times text-danger mx-1 hoverable_text pointer"
      title="حذف برند"
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      >

      </i>
    </>
  );
};

export default Actions;
