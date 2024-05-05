import { user } from "@/util/db";
import { NextResponse } from "next/server";

// export function GET(request, content) {
//   const userData = user.filter((item) => item.id==content.params.user_id)
//   console.log("id1", content.params.user_id);
//   return NextResponse.json(userData, { status: 200 });
// }

export function GET(request, content) {
    // console.log("Requested ID:", content.params.user_id);
    const userData = user.filter((item) => item.id == content.params.user_id);
    // console.log("Filtered User Data:", userData);
    return NextResponse.json(
        userData.length==0?{result:"No Data Found", success:false}:{result:userData,success:true},{ status: 200 });
  }
  