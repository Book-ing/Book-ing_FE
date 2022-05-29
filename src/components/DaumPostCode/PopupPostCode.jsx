import React from 'react';
import DaumPostcode from "react-daum-postcode";
import { useDispatch } from 'react-redux';
import { postCode } from '../../redux/modules/postcode';
 
const PopupPostCode = (props) => {
  const dispatch = useDispatch();
  // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
  const handlePostCode = (data) => {
    // console.log(data);
    let jibunAddress = data.jibunAddress ? data.jibunAddress : data.autoJibunAddress ;
    let roadAddress = data.roadAddress; 
    let zoneCode = data.zonecode;

    // console.log(data)
    // console.log(jibunAddress)
        
    //     주소 조합용 로직 수정해야할 사항 있음
    //     if (data.addressType === 'R') {
    //       if (data.bname !== '') {
    //         extraAddress += data.bname;
    //       }
    //       if (data.buildingName !== '') {
    //         extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
    //       }
    //       fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    //     }
       const postInfo = {
          jibunAdd : jibunAddress,
          roadAdd : roadAddress,
          zoneCode : zoneCode,
       }
      
        dispatch(postCode(postInfo));
    
        // console.log(fullAddress);
        // console.log(data.zonecode);
        props.onClose()
    }
 
    const postCodeStyle = {
        display: "block",
        position: "absolute",
        top: "32%",
        left:"51%",
        width: "478px",
        height: "400px",
        border: "1px solid black",
        // padding: "10px 0px px 3px",
      };
 
    return(
        <div>
            <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />

            <button style={{marginLeft:"465px", fontSize:"25px"}} type='button' onClick={() => {props.onClose()}} className='postCode_btn'>x</button>
        </div>
    )
}
 
export default PopupPostCode;