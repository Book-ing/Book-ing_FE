import React from "react";
import DaumPostcode from "react-daum-postcode";
import { useDispatch } from "react-redux";
import { postCode } from "../../redux/modules/postcode";

const PopupPostCode = (props) => {
  const dispatch = useDispatch();
  // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
  const handlePostCode = (data) => {
    let jibunAddress = data.jibunAddress
      ? data.jibunAddress
      : data.autoJibunAddress;
    let roadAddress = data.roadAddress;
    let zoneCode = data.zonecode;

    const postInfo = {
      jibunAdd: jibunAddress,
      roadAdd: roadAddress,
      zoneCode: zoneCode,
    };

    dispatch(postCode(postInfo));
    props.onClose();
  };

  const postCodeStyle = {
    display: "block",
    position: "absolute",
    top: "32%",
    left: "51%",
    width: "478px",
    height: "400px",
    border: "1px solid black",
  };

  return (
    <div>
      <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />

      <button
        style={{ marginLeft: "465px", fontSize: "25px" }}
        type="button"
        onClick={() => {
          props.onClose();
        }}
        className="postCode_btn"
      >
        x
      </button>
    </div>
  );
};

export default PopupPostCode;
