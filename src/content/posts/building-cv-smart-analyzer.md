---
title: "Building CV Smart Analyzer: NLP-Powered Resume Matching"
description: "How I built a Java application that uses Natural Language Processing to rank CVs against job descriptions."
pubDate: 2025-01-05
tags: ["Java", "NLP", "Machine Learning", "Tutorial"]
readingTime: "6 min read"
---

## The Problem

Recruiters spend hours manually reviewing CVs to find the right candidates. Job seekers submit applications without knowing how well their resume matches the position. Both sides lose time in this inefficient process.

What if we could automate the initial screening and provide instant feedback on CV-job fit?

## The Solution: CV Smart Analyzer

I built CV Smart Analyzer to bridge this gap using Natural Language Processing. The application:
- Parses CVs and job descriptions from PDF/Word documents
- Extracts meaningful features using NLP
- Calculates similarity scores
- Provides actionable insights

## The Tech Stack

### Stanford CoreNLP

Stanford's NLP library provides industrial-strength text processing:

```java
Properties props = new Properties();
props.setProperty("annotators", "tokenize,ssplit,pos,lemma");
StanfordCoreNLP pipeline = new StanfordCoreNLP(props);

CoreDocument document = new CoreDocument(text);
pipeline.annotate(document);
```

The pipeline handles:
- **Tokenization** - Breaking text into words
- **Lemmatization** - Reducing words to their base form ("running" → "run")
- **POS Tagging** - Identifying parts of speech

### TF-IDF Scoring

Term Frequency-Inverse Document Frequency (TF-IDF) evaluates word importance:

```java
public double calculateTfIdf(String term, Document doc, Collection<Document> corpus) {
    double tf = termFrequency(term, doc);
    double idf = inverseDocumentFrequency(term, corpus);
    return tf * idf;
}
```

This helps identify which skills and keywords are most relevant to a specific job.

### Cosine Similarity

To compare documents, I convert them to vectors and measure the angle between them:

```java
public double cosineSimilarity(double[] vectorA, double[] vectorB) {
    double dotProduct = 0.0;
    double normA = 0.0;
    double normB = 0.0;

    for (int i = 0; i < vectorA.length; i++) {
        dotProduct += vectorA[i] * vectorB[i];
        normA += Math.pow(vectorA[i], 2);
        normB += Math.pow(vectorB[i], 2);
    }

    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}
```

A score of 1.0 means identical documents; 0.0 means no similarity.

## The Architecture

### Document Parsing

Apache PDFBox and Apache POI handle different file formats:

```java
public String extractText(File file) {
    if (file.getName().endsWith(".pdf")) {
        return extractFromPdf(file);
    } else if (file.getName().endsWith(".docx")) {
        return extractFromWord(file);
    }
    throw new UnsupportedFormatException();
}
```

### Dual Interface

The application offers both GUI and console interfaces:

**GUI (Java Swing):**
- Drag-and-drop file upload
- Visual progress indicators
- Results displayed in formatted tables

**Console:**
- Scriptable for batch processing
- Integration with other tools
- Ideal for power users

### CI/CD with GitHub Actions

Every push triggers automated builds and tests:

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-java@v4
        with:
          java-version: '17'
      - run: mvn clean verify
```

## Challenges & Solutions

### Challenge 1: Handling Different Document Formats

PDFs can be text-based or scanned images, and Word documents have complex internal structures.

**Solution:** Multiple parsing strategies with fallbacks. For image-based PDFs, OCR could be added as a future enhancement.

### Challenge 2: Meaningful Similarity Scores

Raw cosine similarity doesn't always reflect practical job fit.

**Solution:** Weighted scoring that prioritizes:
- Technical skills mentioned in job requirements
- Years of experience mentions
- Education and certification keywords

### Challenge 3: Performance with Large Documents

Processing lengthy CVs with full NLP pipelines was slow.

**Solution:** Selective annotation—only run the annotators actually needed. Caching of processed documents for repeated comparisons.

## Key Learnings

1. **NLP is powerful but requires tuning** - Out-of-the-box algorithms need domain-specific adjustments
2. **Document parsing is messier than expected** - Real-world documents are inconsistent
3. **Desktop apps still have value** - Not everything needs to be a web app
4. **CI/CD improves code quality** - Automated testing caught several bugs before they became problems

## Results

The analyzer successfully identifies strong CV-job matches with approximately 85% accuracy compared to human evaluation. It's particularly effective at:
- Technical role matching (clear skill requirements)
- Filtering obviously unqualified candidates
- Highlighting missing keywords for job seekers

## What's Next

Potential improvements include:
- Web interface for broader accessibility
- Machine learning model trained on successful hires
- Integration with job board APIs
- Resume improvement suggestions

---

*View the [source code on GitHub](https://github.com/catalindragusanu/CV-Smart-Analyzer) and try it yourself!*
