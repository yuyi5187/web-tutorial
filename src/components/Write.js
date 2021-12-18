import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import React, {Component} from "react";
import {useState} from 'react';
import "./Write.css";

function Write(){
    const [reviewContent, setreviewContent]=useState({
        title:'',
        content:''
    })

    const [viewContent, setViewContent]=useState([]);

    const getValue=e=>{
        const {name, value}=e.target;
        setreviewContent({
            ...reviewContent,
            [name]:value
        })
        console.log(reviewContent);
    }

    return (
        <div className="Write">
            <h1> Book Review</h1>
            <div className="containter">
                {viewContent.map(element =>
                    <div>
                        <h2>{element.title}</h2>
                        <div>
                            {element.content}
                        </div>
                    </div>

                )}
            </div>
            <div className="form-wrapper">
                <input
                    className="title-input"
                    type="text"
                    placeholder="제목"
                    onChange={getValue}
                    name='title'
                />
                <CKEditor
                editor={ClassicEditor}
                data="<p>내용을 입력하세요</p>"
                onReady={ editor=>{
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor)=>{
                    const data=editor.getData();
                    console.log({event, editor, data});
                    setreviewContent({
                        ...reviewContent,
                        content:data
                    })
                    console.log(reviewContent);
                }}
                onBlur={(event, editor)=>{
                    console.log('Blur', editor);
                }}
                onFocus={(event, editor)=>{
                    console.log('Focus', editor);
                }}
                />
            </div>
            <button 
            className="submit-button"
            onClick={()=>{
                setViewContent(viewContent.concat({...reviewContent}));
            }}
            >입력</button>
        </div>
    );
}

export default Write;