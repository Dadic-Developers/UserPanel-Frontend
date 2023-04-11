
import axios from "axios";

const BASE_URL = "http://daadik.com:8000/";
// const api_key="freeMJTnmXZE28FI48KXsybVNZwzoWMY";
// export const NavasanAPI={IP:"http://api.navasan.tech/latest/?api_key="+api_key};
export const PathImage = {
  pathFile: `${BASE_URL}staticfiles/uploads/`,
};

export const ENDPIONTS = {
  
  UserInfo: "accounts/user_info", //  get
  Login: "accounts/login", // post
  Refresh: "accounts/refresh", // post
  Search: "search/query", //  post
  Logout: "accounts/logout", // post
  History: "search/history", // post
  EditUser: "accounts/user_edit", //  put
  PlanStatus: "accounts/plan_status", //  get
  Forget: "accounts/forget", // post
  CheckCode: "accounts/code", //  post 	email, code
  ChangePassword: "accounts/change_pass", //  put
  ListTicket: "support/list_ticket", // get
  CreateTicket: "support/create_ticket", // post
  ListReply: "support/list_reply", // get
  News: "search/news", // post
  UploadImage: "accounts/upload_image", //  post
  Question: "statement/similar_questions", // post
  GetLayehe: "statement/docx_download", //  post
  CreateLayehe: "statement/create", //  post
  HistoryLayehe: "statement/list", // get
  TopEntity: "analytics/top_entity", // post
  DataRange: "analytics/date_range", // post
  SimilarDocs: "analytics/similar_docs", // post
  ClauseHistory:"analytics/clause_history", //  post
  dateRangeV2:"analytics/date_range_v2",// post
  statusTimeline:"analytics/status_timeline",// post
  getCode:"poll/get_code", // get
  PollCreate:"poll/create",// post
  ListPolls:"poll/list_polls",//  get
  saveComment:"poll/save_comment",//  post
  listOperators:"statement/list_operators",// get
  GetCurrency:"tools/currency",// get
  ChatMsg:"chat/message",// post
  ChatUpload:"chat/upload_file",//  post
  ChatList:"chat/list",// get
  ChatListNotResponse:"chat/status/?is_replied=false",//  get
  UploadFile:"chat/upload_file",//  post
  ChatStatus:"chat/status",// get
}

export  const createAPIEndpoint = (endpoint) => {
  
   const url= `${BASE_URL}${endpoint}/`;

  return  {
    postAll: async() =>  axios.post(url),
    fetchAll: async() =>  axios.get(url),
    fetchUrl: async(urlpage) =>  axios.get(urlpage),
    fetchById: async(id) => axios.get(url + id),
    create: async(newRecord) => axios.post(url, newRecord),
    getInfo:async (BodyRecord) => axios.post(url, BodyRecord),
    update: async(updatedRecord) => axios.put(url, updatedRecord),
    getUtrlFile: async(updatedRecord, headers) =>
     axios.post(url, updatedRecord, headers),
    sendticket: async(BodyRecord, headers) =>  axios.post(url, BodyRecord, headers),
    delete:async (id) => axios.delete(url + id),
    // refreshToken:()=>axios.post(url, ),

  };
};
export const NAMEFILE = {
  TAXTREE: "/Tax.json",
  TAX: "/TaxRules.json",
  TelDadSara:"/Tels/DadSara.json",
  TelDaraei:"/Tels/Daraei.json",
  TelGhazaei:"/Tels/Ghazaei.json"
};

export const LoadFile = function (nameFile) {
  
  fetch(process.env.PUBLIC_URL + nameFile)
    .then((res) => res.json())
    .then((data) => {
      
      return data;
    });
};

// const res = await axios.post('https://httpbin.org/post', { hello: 'world' }, {
//   headers: {
//     // 'application/json' is the modern content-type for JSON, but some
//     // older servers may use 'text/json'.
//     // See: http://bit.ly/text-json
//     'content-type': 'text/json'
//   }
// });
 
