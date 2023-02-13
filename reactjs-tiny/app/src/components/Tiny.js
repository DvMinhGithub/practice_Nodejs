import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { DOMAIN } from '../constants';
var arrImg = []
export default class Tiny extends React.Component {
    state = {
        id: '',
        content: '',
        titleAdd: '',
        titleUpdate: ''
    }

    componentDidUpdate() {
        if (this.state.id !== this.props.id) {
            this.setState({
                id: this.props.id,
                content: this.props.content,
                titleUpdate: this.props.title
            })
        }
    }

    render() {
        return (
            <div>
                <input className='input-add' onChange={(e) => {
                    this.setState({ titleAdd: e.target.value })
                }} />
                <button className='btn-add' onClick={() => {
                    this.props.addTiny({ content: this.state.content, arrImg: arrImg, title: this.state.titleAdd })
                    this.setState({ content: '' })
                }}>ADD</button>

                <input value={this.state.titleUpdate} onChange={(e) => {
                    this.setState({ titleUpdate: e.target.value })
                }} />
                <button onClick={() => {
                    this.props.updateTiny({ id: this.state.id, content: this.state.content, title: this.state.titleUpdate })
                }}>Update</button>

                <Editor
                    onEditorChange={(value) => { this.setState({ content: value }) }}
                    value={this.state.content}
                    apiKey='0szh883h1tq2448dxm7x6mhm5xn1bo1gpqm1paatrzex5uxl'
                    initialValue="<p></p>"
                    init={{
                        height: 500,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount image'
                        ],
                        toolbar: 'undo redo | formatselect | ' +
                            'bold italic backcolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help image',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                        images_upload_handler: async function (blobInfo, success, failure) {
                            var response, form = new FormData()
                            form.append('img', blobInfo.blob())
                            try {
                                response = await fetch(DOMAIN, {
                                    method: 'POST', body: form
                                })
                                const res = await response.json()
                                success(res.arrLink[0])
                                arrImg = (res.arrImg)
                            } catch (error) {
                                failure('Invalide JSON' + response)
                            }
                        }
                    }}
                />
            </div>
        );
    }
}
