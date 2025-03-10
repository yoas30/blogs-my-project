export default async function BlogDetail({params}: {params :{id:string}}){ //Object dengan type data string
    return  <div>Blog Detail {params.id}</div>
}