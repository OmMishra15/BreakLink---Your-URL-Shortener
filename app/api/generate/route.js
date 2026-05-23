import clientPromise from "@/lib/mongodb"

export async function POST(request) {

    const body = await request.json()
    const client = await clientPromise
    const db=client.db("BreakLink")
    
    const collection = db.collection("generatedURL")

    // URL Exists
    const doc = await collection.findOne({
        "shorturl":body.shorturl
    })
    if(doc){
        return Response.json({success:false,error:true,
            message:"URL Exists"
          })
    }

    // Genarating URL
    const insert = await collection.insertOne({
        "url":body.URL,
        "shorturl":body.shorturl
    })

    return Response.json({success:true,error:false,
      message:"URL is Generated successfully"
    })
  }