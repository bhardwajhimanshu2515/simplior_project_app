import {
  ADD_EXPERIENCE,
  EDIT_EXPERIENCE,
  LOAD_USER_EXP_DETAILS,
} from "./types";
import { constant } from "../config.js";

const api = constant.endpoint;

export const addExperience = (post) => (dispatch) => {
  console.log("add experiecne");
  fetch(`${api}/experienceInfo/addExperience`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(post),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: ADD_EXPERIENCE, payload: data });
      localStorage.setItem("experienceInfoId", data._id);
      console.log("addexp",data);
    });
};
export const editExperience = (post) => (dispatch) => {
  console.log("edit expereince");
  fetch(`${api}/experienceInfo/editExperience`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(post),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: EDIT_EXPERIENCE, payload: data });
      console.log("editexp",data);
    });
};
export const loadUserExpDetails = () => (dispatch) => {
  console.log("siginin");
  fetch(`${api}/all/allInfo/${localStorage.getItem("CompanyId")}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: LOAD_USER_EXP_DETAILS, payload: data });
      console.log("loadexp",data);
    });
};
