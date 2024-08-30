import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface WYSIWYGEditorProps {
    value: string;
    onChange: (value: string) => void;
}

const WYSIWYGEditor: React.FC<WYSIWYGEditorProps> = ({ value, onChange }) => {
    return (
        <ReactQuill 
            value={value}
            onChange={onChange}
            className="border rounded"
            theme="snow"
        />
    );
};

export default WYSIWYGEditor;
