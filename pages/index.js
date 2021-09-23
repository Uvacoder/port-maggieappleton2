import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import Layout from "../components/Layout";
import {
    essayFilePaths,
    ESSAYS_PATH,
    noteFilePaths,
    NOTES_PATH,
    patternFilePaths,
    PATTERNS_PATH,
    caseStudyFilePaths,
    CASE_STUDIES_PATH,
} from "../utils/mdxUtils";

export default function Index({ essays, notes, patterns, caseStudies }) {
    return (
        <Layout>
            <h1>Home Page</h1>

            <ul>
                {essays.map((essay) => (
                    <li key={essay.filePath}>
                        <Link
                            as={`/${essay.filePath.replace(/\.mdx?$/, "")}`}
                            href={`/[slug]`}
                        >
                            <a>{essay.data.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
            <ul>
                {patterns.map((pattern) => (
                    <li key={pattern.filePath}>
                        <Link
                            as={`/${pattern.filePath.replace(/\.mdx?$/, "")}`}
                            href={`/[slug]`}
                        >
                            <a>{pattern.data.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
            <ul>
                {caseStudies.map((caseStudy) => (
                    <li key={caseStudy.filePath}>
                        <Link
                            as={`/${caseStudy.filePath.replace(/\.mdx?$/, "")}`}
                            href={`/[slug]`}
                        >
                            <a>{caseStudy.data.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
            <ul>
                {notes.map((note) => (
                    <li key={note.filePath}>
                        <Link
                            as={`/${note.filePath.replace(/\.mdx?$/, "")}`}
                            href={`/[slug]`}
                        >
                            <a>{note.data.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </Layout>
    );
}

export function getStaticProps() {
    const essays = essayFilePaths.map((filePath) => {
        const source = fs.readFileSync(path.join(ESSAYS_PATH, filePath));
        const { content, data } = matter(source);

        return {
            content,
            data,
            filePath,
        };
    });

    const notes = noteFilePaths.map((filePath) => {
        const source = fs.readFileSync(path.join(NOTES_PATH, filePath));
        const { content, data } = matter(source);

        return {
            content,
            data,
            filePath,
        };
    });

    const patterns = patternFilePaths.map((filePath) => {
        const source = fs.readFileSync(path.join(PATTERNS_PATH, filePath));
        const { content, data } = matter(source);

        return {
            content,
            data,
            filePath,
        };
    });

    const caseStudies = caseStudyFilePaths.map((filePath) => {
        const source = fs.readFileSync(path.join(CASE_STUDIES_PATH, filePath));
        const { content, data } = matter(source);

        return {
            content,
            data,
            filePath,
        };
    });

    return { props: { essays, notes, patterns, caseStudies } };
}
