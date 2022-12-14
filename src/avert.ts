import axios from "axios";
import Utils from "./util.js";

const URL = await Utils.prompt("Enter a URL:")
Utils.log(URL);