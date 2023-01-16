const fs = require("fs");
const path = require("path");
const { exec } = require("child_process")

const config = require("../config.js");

const createVersion = (version) => {
    fs.copyFile(
        path.resolve(__dirname, "../src/output.html"),
        path.resolve(__dirname, `../dist/${config.name}-v${version}.html`),
        (error) => {
            if (error) throw error;

            console.log(`Successfully created new versioned file: ${config.name}-v${version}.html.`);
        }
    );
};

exec("mjml src/index.mjml -o src/output.html", (error) => {
    if (error) {
        throw error;
    }

    if (!fs.existsSync(path.resolve(__dirname, "../dist"))) {
        fs.mkdirSync(path.resolve(__dirname, "../dist"));
    }

    fs.readdir(path.resolve(__dirname, "../dist"), (error, files) => {
        if (error) {
            throw error;
        }

        let outputFiles = [];

        if (files?.length) {
            files.forEach(file => {
                outputFiles.push({
                    fileName: file,
                    version: Number(file.match(/\d/g).join("")),
                });
            });

            outputFiles.sort((a, b) => a.version - b.version);

            createVersion(outputFiles[outputFiles.length - 1].version + 1);
        } else {
            createVersion(1);
        }
    });
});
