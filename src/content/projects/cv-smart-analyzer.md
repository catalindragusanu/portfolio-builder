---
title: "CV Smart Analyzer"
description: "A Java application that uses Natural Language Processing to rank CVs against job descriptions, with both GUI and console interfaces and a CI/CD pipeline."
pubDate: 2025-01-05
tags: ["Java", "Maven", "NLP", "Stanford CoreNLP", "GitHub Actions", "CI/CD"]
repoUrl: "https://github.com/catalindragusanu/CV-Smart-Analyzer"
featured: true
---

## Overview

CV Smart Analyzer is an intelligent document analysis tool that helps recruiters and job seekers evaluate how well a CV matches a specific job description. Using Natural Language Processing techniques, it provides similarity scores and insights.

## Key Features

- **NLP-Powered Analysis** - Uses Stanford CoreNLP for advanced text processing
- **TF-IDF Scoring** - Implements Term Frequency-Inverse Document Frequency for relevance ranking
- **Cosine Similarity** - Calculates similarity scores between documents
- **Dual Interface** - Both GUI (Swing) and console interfaces available
- **Document Support** - Handles PDF and Word documents using Apache PDFBox and POI
- **Automated CI/CD** - GitHub Actions pipeline for continuous integration

## Tech Stack

- **Language**: Java
- **Build Tool**: Maven
- **NLP**: Stanford CoreNLP
- **Document Parsing**: Apache PDFBox, Apache POI
- **GUI**: Java Swing
- **CI/CD**: GitHub Actions

## Technical Implementation

The application uses:
1. **TF-IDF (Term Frequency-Inverse Document Frequency)** - Evaluates word importance across documents
2. **Cosine Similarity** - Measures the angle between document vectors in multi-dimensional space
3. **Stanford CoreNLP** - Provides tokenization, lemmatization, and part-of-speech tagging

## Lessons Learned

Building this project enhanced my understanding of:
1. Natural Language Processing fundamentals
2. Building desktop applications with Swing
3. Setting up CI/CD pipelines with GitHub Actions
4. Working with different document formats programmatically
