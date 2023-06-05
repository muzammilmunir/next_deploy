

export async function GET(request){

    const users = [
        { id: 1 , name: "john"},
        { id: 1 , name: "dave"},
        { id: 1 , name: "bob"},
    ]

    return new Response(JSON.stringify(users))
}