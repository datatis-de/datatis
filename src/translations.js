// translations.js - Complete multi-language support
export const translations = {
    de: {
        nav: {
            title: 'PHUVIETPHAM - Data Engineer & BI Expert',
            awards: 'Auszeichnungen',
            testimonials: 'Referenzen',
            expertise: 'Expertise',
            why: 'Warum ich',
            contact: 'Kontakt'
        },
        hero: {
            title: 'DATA ENGINEER<br>& BI EXPERT<br>AUS LEIDENSCHAFT.',
            subtitle: 'Phu Viet - Preisgekrönter Dateningenieur. Ich verwandle komplexe Daten in klare, gewinnbringende Strategien für deutsche Unternehmen.',
            rating: '5.0 ★ Top bewertet auf Upwork',
            cta1: 'MICH AUF UPWORK BUCHEN',
            cta2: 'KONTAKT'
        },
        sections: {
            awards: 'Auszeichnungen & Projekte',
            testimonials: 'Was Kunden Sagen',
            success: 'Erfolgsgeschichten',
            expertise: 'Unsere Expertise',
            why: 'Warum ich?'
        },
        awards: {
            award1: 'Deutschland Smart Factory 4.0',
            award1Desc: 'Auszeichnung für innovative Real-Time Big Data Lösungen.',
            award2: '3. Platz KI-Wettbewerb',
            award2Desc: 'Innovative KI-Ansätze für praktische Geschäftsanwendungen.',
            award3: 'Top 1% Freelancer',
            award3Desc: 'Top Rated Plus auf Upwork & 100% Kundenzufriedenheit.'
        },
        testimonials: {
            bosch: '"Herr Phạm war ein Innovationstreiber... eines sehr erfolgreichen datengetriebenen Service \'Rapid Pivot\', welcher in kürzester Zeit Massendaten pivotiert."',
            boschAuthor: '— Bosch Deutschland',
            solar: '"Herr Pham verfügt über umfassende und vielseitige Fachkenntnisse... Er bildete sich stets in eigener Initiative beruflich weiter."',
            solarAuthor: '— SolarWorld Deutschland',
            upwork: '"Phu, it was an honor working with you. You are very talented and an expert when it comes to BI and Databases."',
            upworkAuthor: '— Upwork Client ($1M+)',
            viewRef: 'Referenz ansehen'
        },
        stories: {
            problem: 'Problem:',
            solution: 'Lösung:',
            result: 'Ergebnis:',
            story1Title: 'Fabrik vor 20% Ausschuss gerettet',
            story1Tag: 'AUTOMATISIERTE PRODUKTION',
            story1Prob: 'In Produktionslinien mit hohem Druck führte die verzögerte Fehlererkennung dazu, dass die Fabrik jeden Monat tonnenweise Material verschwendete. Der Produktionsleiter war \'blind\', weil Qualitätsberichte immer 2 Tage zu spät kamen.',
            story1Sol: 'Wir implementierten das \'Digital Quality Guard\' System. Daten von Maschinensensoren werden in Echtzeit auf das Dashboard übertragen. Jede Abweichung bei Temperatur/Druck löst sofort eine automatische Warnmeldung an den Chefingenieur aus.',
            story1Res: 'Senkung der Fehlerrate um 20% im ersten Monat. Das technische Team wechselte vom \'Feuerlösch\'-Modus zur proaktiven \'Risikoprävention\'.',
            story2Title: '150 Stunden für die Buchhaltung befreit',
            story2Tag: 'EINZELHANDEL & FINANZEN',
            story2Prob: 'Das Monatsende war ein Albtraum für die Buchhaltung: Manuelle Zusammenführung von 14 Excel-Dateien aus 14 Filialen mit chaotischen Formaten. Datenfehler waren an der Tagesordnung, und der CEO kannte den genauen Umsatz erst am 10. des Folgemonats.',
            story2Sol: 'Wir eliminierten den manuellen Prozess mit einer automatisierten \'Datenpipeline\'. Das System \'saugt\' Daten automatisch von den POS-Geräten, bereinigt, standardisiert sie und speist sie jede Nacht in das zentrale Data Warehouse. Finanzberichte werden automatisch um 8 Uhr morgens aktualisiert.',
            story2Res: 'Einsparung von 150 Arbeitsstunden/Monat (fast eine ganze Vollzeitkraft). 100% Genauigkeit, der CEO verfolgt den Cashflow täglich auf dem Handy.',
            story3Title: 'KI liest Verträge statt Anwälte',
            story3Tag: 'RECHT & VERWALTUNG',
            story3Prob: 'Die Rechtsabteilung war mit Tausenden von Papierverträgen überlastet. Das Nachschlagen einer Klausel im physischen Archiv dauerte Stunden, und das Risiko, nachteilige Klauseln zu übersehen, war sehr hoch.',
            story3Sol: 'Einsatz der \'AI Legal Assistant\' Lösung auf einem lokalen Server (absolute Sicherheit). Nutzung von OCR- und LLM-Technologie (Ollama) zur Digitalisierung aller Papierdokumente. Mitarbeiter geben Fragen in natürlicher Sprache ein, die KI extrahiert Antworten in 2 Sekunden.',
            story3Res: 'Reduzierung der Suchzeit um 80%. Das System warnt automatisch vor auslaufenden Klauseln und hilft dem Unternehmen, rechtliche Risiken in Milliardenhöhe zu vermeiden.'
        },
        expertise: {
            cat1: {
                title: 'Datenarchitektur',
                i1: '3NF, Kimball, Data Vault 2.0 Methodologien',
                i2: 'Echtzeitarchitekturen',
                i3: 'SAP Power Designer, pg modeler'
            },
            cat2: {
                title: 'Datenbanktechnologien',
                i1: 'MS SQL Server (SSIS, SSAS, SSMS, SSRS)',
                i2: 'Postgres SQL, MySQL',
                i3: 'Redshift Data Warehousing',
                i4: 'Azure/AWS Cloud-Datenbanken'
            },
            cat3: {
                title: 'Datenintegration',
                i1: 'Mehrere Quellformate (CSV, Excel, SAP)',
                i2: 'Talend, SSIS ETL',
                i3: 'Python ETL-Pipelines',
                i4: 'Airflow Orchestrierung'
            },
            cat4: {
                title: 'Optimierung',
                i1: 'Data Warehouse Design',
                i2: 'Implementierungsstrategien',
                i3: 'Leistungsoptimierung',
                i4: 'Datenbank-Performance-Tuning'
            },
            cat5: {
                title: 'Analytik',
                i1: 'Hadoop Ökosystem (HIVE, Impala)',
                i2: 'Fortgeschrittene Datenanalyse',
                i3: 'Datenvisualisierung',
                i4: 'Statistische Modellierung'
            },
            cat6: {
                title: 'Business Intelligence',
                i1: 'Tableau Desktop und Server',
                i2: 'Microsoft Power BI',
                i3: 'Qlikview Dashboards',
                i4: 'Datenberichtserstellung'
            },
            cat7: {
                title: 'Automatisierung',
                i1: 'Microsoft Power Automate',
                i2: 'Python Automatisierungsskripte',
                i3: 'Workflow-Automatisierung',
                i4: 'Integration APIs'
            },
            cat8: {
                title: 'n8n',
                i1: 'Workflow-Automatisierung',
                i2: 'Integration von APIs',
                i3: 'Low-Code-Lösungen',
                i4: 'Prozessoptimierung'
            },
            cat9: {
                title: 'Google Analytics',
                i1: 'Web-Tracking und Analyse',
                i2: 'Benutzerdefinierte Berichte',
                i3: 'Conversion-Tracking',
                i4: 'Datenintegration mit anderen Tools'
            }
        },
        facts: {
            fact1: '12+ Jahre',
            fact1Desc: 'Erfahrung in Data Engineering & Analytics',
            fact2: 'Innovationsführer',
            fact2Desc: 'Erfinder einer preisgekrönten Smart Factory 4.0 Lösung',
            fact3: '50+ Projekte',
            fact3Desc: 'Erfolgreich für internationale Kunden umgesetzt',
            fact4: '100% Fokus',
            fact4Desc: 'Auf messbaren Geschäftserfolg durch Daten'
        },
        contact: {
            title: 'Lass uns zusammenarbeiten',
            name: 'Name',
            email: 'E-Mail',
            subject: 'Betreff',
            message: 'Nachricht',
            submit: 'Nachricht senden',
            success: 'Nachricht erfolgreich gesendet!',
            error: 'Fehler beim Senden der Nachricht.'
        }
    },
    en: {
        nav: {
            title: 'PHUVIETPHAM - Data Engineer & BI Expert',
            awards: 'Awards',
            testimonials: 'References',
            expertise: 'Expertise',
            why: 'Why Me',
            contact: 'Contact'
        },
        hero: {
            title: 'DATA ENGINEER<br>& BI EXPERT<br>WITH PASSION.',
            subtitle: 'Phu Viet - Award-winning Data Engineer. I transform complex data into clear, profitable strategies for businesses.',
            rating: '5.0 ★ Top Rated on Upwork',
            cta1: 'BOOK ME ON UPWORK',
            cta2: 'CONTACT'
        },
        sections: {
            awards: 'Awards & Projects',
            testimonials: 'What Clients Say',
            success: 'Success Stories',
            expertise: 'Our Expertise',
            why: 'Why Me?'
        },
        awards: {
            award1: 'Germany Smart Factory 4.0',
            award1Desc: 'Recognition for innovative Real-Time Big Data solutions.',
            award2: '3rd Place AI Competition',
            award2Desc: 'Innovative AI approaches for practical business applications.',
            award3: 'Top 1% Freelancer',
            award3Desc: 'Top Rated Plus on Upwork & 100% client satisfaction.'
        },
        testimonials: {
            bosch: '"Mr. Phạm was an innovation driver... of a very successful data-driven service \'Rapid Pivot\', which pivots mass data in the shortest time."',
            boschAuthor: '— Bosch Germany',
            solar: '"Mr. Pham has comprehensive and versatile expertise... He always pursued professional development on his own initiative."',
            solarAuthor: '— SolarWorld Germany',
            upwork: '"Phu, it was an honor working with you. You are very talented and an expert when it comes to BI and Databases."',
            upworkAuthor: '— Upwork Client ($1M+)',
            viewRef: 'View Reference'
        },
        stories: {
            problem: 'Problem:',
            solution: 'Solution:',
            result: 'Result:',
            story1Title: 'Saved Factory from 20% Scrap Rate',
            story1Tag: 'AUTOMATED PRODUCTION',
            story1Prob: 'In high-pressure production lines, delayed error detection caused the factory to waste tons of material every month. The production manager was \'blind\' because quality reports always arrived 2 days late.',
            story1Sol: 'We implemented the \'Digital Quality Guard\' system. Data from machine sensors is transmitted in real-time to the dashboard. Any deviation in temperature/pressure immediately triggers an automatic warning to the chief engineer.',
            story1Res: 'Reduced error rate by 20% in the first month. The technical team shifted from \'firefighting\' mode to proactive \'risk prevention\'.',
            story2Title: 'Freed 150 Hours for Accounting',
            story2Tag: 'RETAIL & FINANCE',
            story2Prob: 'The end of the month was a nightmare for accounting: manual consolidation of 14 Excel files from 14 branches with chaotic formats. Data errors were common, and the CEO only knew the exact revenue by the 10th of the following month.',
            story2Sol: 'We eliminated the manual process with an automated \'data pipeline\'. The system automatically \'sucks\' data from POS devices, cleans, standardizes it, and feeds it into the central Data Warehouse every night. Financial reports are updated automatically at 8 AM.',
            story2Res: 'Saved 150 working hours/month (almost one full-time employee). 100% accuracy, the CEO tracks cash flow daily on their phone.',
            story3Title: 'AI Reads Contracts Instead of Lawyers',
            story3Tag: 'LEGAL & ADMINISTRATION',
            story3Prob: 'The legal department was overwhelmed with thousands of paper contracts. Looking up a clause in the physical archive took hours, and the risk of missing adverse clauses was very high.',
            story3Sol: 'Deploing the \'AI Legal Assistant\' solution on a local server (absolute security). Use of OCR and LLM technology (Ollama) to digitize all paper documents. Employees enter questions in natural language, and the AI extracts answers in 2 seconds.',
            story3Res: 'Reduced search time by 80%. The system automatically warns of expiring clauses and helps the company avoid billion-dollar legal risks.'
        },
        expertise: {
            cat1: {
                title: 'Data Architecture',
                i1: '3NF, Kimball, Data Vault 2.0 Methodologies',
                i2: 'Real-time Architectures',
                i3: 'SAP Power Designer, pg modeler'
            },
            cat2: {
                title: 'Database Technologies',
                i1: 'MS SQL Server (SSIS, SSAS, SSMS, SSRS)',
                i2: 'Postgres SQL, MySQL',
                i3: 'Redshift Data Warehousing',
                i4: 'Azure/AWS Cloud Databases'
            },
            cat3: {
                title: 'Data Integration',
                i1: 'Multiple source formats (CSV, Excel, SAP)',
                i2: 'Talend, SSIS ETL',
                i1: 'Python ETL Pipelines',
                i4: 'Airflow Orchestration'
            },
            cat4: {
                title: 'Optimization',
                i1: 'Data Warehouse Design',
                i2: 'Implementation Strategies',
                i3: 'Performance Optimization',
                i4: 'Database Performance Tuning'
            },
            cat5: {
                title: 'Analytics',
                i1: 'Hadoop Ecosystem (HIVE, Impala)',
                i2: 'Advanced Data Analysis',
                i3: 'Data Visualization',
                i4: 'Statistical Modeling'
            },
            cat6: {
                title: 'Business Intelligence',
                i1: 'Tableau Desktop and Server',
                i2: 'Microsoft Power BI',
                i3: 'Qlikview Dashboards',
                i4: 'Data Reporting'
            },
            cat7: {
                title: 'Automation',
                i1: 'Microsoft Power Automate',
                i2: 'Python Automation Scripts',
                i3: 'Workflow Automation',
                i4: 'API Integration'
            },
            cat8: {
                title: 'n8n',
                i1: 'Workflow Automation',
                i2: 'API Integration',
                i3: 'Low-Code Solutions',
                i4: 'Process Optimization'
            },
            cat9: {
                title: 'Google Analytics',
                i1: 'Web Tracking and Analysis',
                i2: 'Custom Reporting',
                i3: 'Conversion Tracking',
                i4: 'Integration with Other Tools'
            }
        },
        facts: {
            fact1: '12+ Years',
            fact1Desc: 'Experience in Data Engineering & Analytics',
            fact2: 'Innovation Leader',
            fact2Desc: 'Inventor of an award-winning Smart Factory 4.0 solution',
            fact3: '50+ Projects',
            fact3Desc: 'Successfully delivered for international clients',
            fact4: '100% Focus',
            fact4Desc: 'On measurable business success through data'
        },
        contact: {
            title: "Let's Work Together",
            name: 'Name',
            email: 'Email',
            subject: 'Subject',
            message: 'Message',
            submit: 'Send Message',
            success: 'Message sent successfully!',
            error: 'Error sending message.'
        }
    },
    ko: {
        nav: {
            title: 'PHUVIETPHAM - 데이터 엔지니어 & BI 전문가',
            awards: '수상 경력',
            testimonials: '추천사',
            expertise: '전문 분야',
            why: '선택 이유',
            contact: '연락처'
        },
        hero: {
            title: '열정적인<br>데이터 엔지니어<br>& BI 전문가',
            subtitle: 'Phu Viet - 수상 경력의 데이터 엔지니어. 복잡한 데이터를 명확하고 수익성 있는 전략으로 전환합니다.',
            rating: '5.0 ★ Upwork 최고 평점',
            cta1: 'UPWORK에서 예약',
            cta2: '연락하기'
        },
        sections: {
            awards: '수상 및 프로젝트',
            testimonials: '고객 후기',
            success: '성공 사례',
            expertise: '전문 기술',
            why: '선택 이유'
        },
        awards: {
            award1: '독일 스마트 팩토리 4.0',
            award1Desc: '혁신적인 실시간 빅데이터 솔루션으로 수상.',
            award2: 'AI 경진대회 3위',
            award2Desc: '실용적인 비즈니스 애플리케이션을 위한 혁신적인 AI 접근법.',
            award3: '상위 1% 프리랜서',
            award3Desc: 'Upwork Top Rated Plus & 100% 고객 만족도.'
        },
        testimonials: {
            bosch: '"Phạm 씨는 혁신 주도자였으며... 매우 성공적인 데이터 기반 서비스 \'Rapid Pivot\'을 가장 짧은 시간에 대량 데이터를 피벗했습니다."',
            boschAuthor: '— 보쉬 독일',
            solar: '"Pham 씨는 포괄적이고 다재다능한 전문 지식을 보유하고 있습니다... 그는 항상 자발적으로 전문성 개발을 추구했습니다."',
            solarAuthor: '— SolarWorld 독일',
            upwork: '"Phu, 당신과 함께 일하게 되어 영광이었습니다. BI와 데이터베이스에 관해서는 매우 재능 있고 전문가입니다."',
            upworkAuthor: '— Upwork 고객 ($1M+)',
            viewRef: '참조 보기'
        },
        stories: {
            problem: '문제:',
            solution: '해결책:',
            result: '결과:',
            story1Title: '공장을 20% 불량률에서 구출',
            story1Tag: '자동화된 생산',
            story1Prob: '고압 생산 라인에서 지연된 오류 감지로 인해 공장은 매달 수 톤의 재료를 낭비했습니다. 품질 보고서가 항상 2일 늦게 도착했기 때문에 생산 관리자는 상황을 파악할 수 없었습니다.',
            story1Sol: '\'Digital Quality Guard\' 시스템을 구현했습니다. 머신 센서의 데이터가 실시간으로 대시보드에 전송됩니다. 온도/압력의 편차는 즉시 수석 엔지니어에게 자동 경고를 트리거합니다.',
            story1Res: '첫 달 만에 오류율을 20% 줄였습니다. 기술 팀은 \'사후 처리\' 모드에서 능동적인 \'위험 예방\'으로 전환했습니다.',
            story2Title: '회계 부서 150시간 절약',
            story2Tag: '소매 및 금융',
            story2Prob: '월말은 회계 부서에 악몽이었습니다. 혼란스러운 형식의 14개 지점의 14개 Excel 파일을 수동으로 통합해야 했습니다. 데이터 오류가 빈번했으며, CEO는 다음 달 10일이 되어서야 정확한 수익을 알 수 있었습니다.',
            story2Sol: '자동화된 \'데이터 파이프라인\'으로 수동 프로세스를 제거했습니다. 시스템은 POS 장치에서 데이터를 자동으로 \'흡수\'하고 정제, 표준화하여 매밤 중앙 데이터 웨어하우스에 공급합니다. 재무 보고서는 오전 8시에 자동으로 업데이트됩니다.',
            story2Res: '매달 150시간의 작업 시간을 절약했습니다(거의 풀타임 직원 한 명분). 100% 정확도, CEO는 매일 휴대폰으로 현금 흐름을 추적합니다.',
            story3Title: 'AI가 변호사 대신 계약서 검토',
            story3Tag: '법적 및 행정',
            story3Prob: '법무 부서는 수천 건의 종이 계약서로 업무가 마비되었습니다. 물리적 아카이브에서 조항을 찾는 데 몇 시간이 걸렸으며, 불리한 조항을 놓칠 위험이 매우 높았습니다.',
            story3Sol: '로컬 서버(절대 보안)에 \'AI Legal Assistant\' 솔루션을 배포했습니다. OCR 및 LLM 기술(Ollama)을 사용하여 모든 종이 문서를 디지털화합니다. 직원이 자연어로 질문을 입력하면 AI가 2초 만에 답변을 추출합니다.',
            story3Res: '검색 시간을 80% 단축했습니다. 시스템은 만료되는 조항을 자동으로 경고하고 회사가 수십억 달러의 법적 위험을 피하도록 돕습니다.'
        },
        expertise: {
            cat1: {
                title: '데이터 아키텍처',
                i1: '3NF, Kimball, Data Vault 2.0 방법론',
                i2: '실시간 아키텍처',
                i3: 'SAP Power Designer, pg modeler'
            },
            cat2: {
                title: '데이터베이스 기술',
                i1: 'MS SQL Server (SSIS, SSAS, SSMS, SSRS)',
                i2: 'Postgres SQL, MySQL',
                i3: 'Redshift 데이터 웨어하우징',
                i4: 'Azure/AWS 클라우드 데이터베이스'
            },
            cat3: {
                title: '데이터 통합',
                i1: '다양한 소스 형식 (CSV, Excel, SAP)',
                i2: 'Talend, SSIS ETL',
                i3: 'Python ETL 파이프라인',
                i4: 'Airflow 오케스트레이션'
            },
            cat4: {
                title: '최적화',
                i1: '데이터 웨어하우스 설계',
                i2: '구현 전략',
                i3: '성능 최적화',
                i4: '데이터베이스 성능 튜닝'
            },
            cat5: {
                title: '분석',
                i1: 'Hadoop 에코시스템 (HIVE, Impala)',
                i2: '고급 데이터 분석',
                i3: '데이터 시각화',
                i4: '통계적 모델링'
            },
            cat6: {
                title: '비즈니스 인텔리전스',
                i1: 'Tableau 데스크톱 및 서버',
                i2: 'Microsoft Power BI',
                i3: 'Qlikview 대시보드',
                i4: '데이터 보고서 작성'
            },
            cat7: {
                title: '자동화',
                i1: 'Microsoft Power Automate',
                i2: 'Python 자동화 스크립트',
                i3: '워크플로우 자동화',
                i4: 'API 통합'
            },
            cat8: {
                title: 'n8n',
                i1: '워크플로우 자동화',
                i2: 'API 통합',
                i3: '로우코드 솔루션',
                i4: '프로세스 최적화'
            },
            cat9: {
                title: '구글 애널리틱스',
                i1: '웹 트래킹 및 분석',
                i2: '맞춤형 보고서',
                i3: '전환 추적',
                i4: '다른 도구와의 데이터 통합'
            }
        },
        facts: {
            fact1: '12년 이상',
            fact1Desc: '데이터 엔지니어링 및 분석 경험',
            fact2: '혁신 리더',
            fact2Desc: '수상 경력의 스마트 팩토리 4.0 솔루션 발명가',
            fact3: '50개 이상 프로젝트',
            fact3Desc: '국제 고객을 위해 성공적으로 제공',
            fact4: '100% 집중',
            fact4Desc: '데이터를 통한 측정 가능한 비즈니스 성공'
        },
        contact: {
            title: '함께 일해봅시다',
            name: '이름',
            email: '이메일',
            subject: '제목',
            message: '메시지',
            submit: '메시지 보내기',
            success: '메시지가 성공적으로 전송되었습니다!',
            error: '메시지 전송 중 오류가 발생했습니다.'
        }
    },
    vi: {
        nav: {
            title: 'PHUVIETPHAM - Kỹ sư dữ liệu & Chuyên gia BI',
            awards: 'Giải thưởng',
            testimonials: 'Đánh giá',
            expertise: 'Chuyên môn',
            why: 'Tại sao chọn tôi',
            contact: 'Liên hệ'
        },
        hero: {
            title: 'KỸ SƯ DỮ LIỆU<br>& CHUYÊN GIA BI<br>TÂM HUYẾT.',
            subtitle: 'Phu Viet - Kỹ sư dữ liệu đạt giải thưởng. Tôi chuyển đổi dữ liệu phức tạp thành chiến lược rõ ràng, sinh lời cho doanh nghiệp.',
            rating: '5.0 ★ Đánh giá cao nhất trên Upwork',
            cta1: 'ĐẶT LỊCH TRÊN UPWORK',
            cta2: 'LIÊN HỆ'
        },
        sections: {
            awards: 'Giải thưởng & Dự án',
            testimonials: 'Khách hàng nói gì',
            success: 'Câu chuyện thành công',
            expertise: 'Chuyên môn',
            why: 'Tại sao chọn tôi?'
        },
        awards: {
            award1: 'Nhà máy thông minh Đức 4.0',
            award1Desc: 'Giải thưởng cho giải pháp Big Data thời gian thực sáng tạo.',
            award2: 'Giải ba cuộc thi AI',
            award2Desc: 'Cách tiếp cận AI sáng tạo cho ứng dụng kinh doanh thực tế.',
            award3: 'Freelancer hàng đầu 1%',
            award3Desc: 'Top Rated Plus trên Upwork & 100% hài lòng khách hàng.'
        },
        testimonials: {
            bosch: '"Ông Phạm là người thúc đẩy đổi mới... của dịch vụ dựa trên dữ liệu rất thành công \'Rapid Pivot\', xoay chuyển dữ liệu khổng lồ trong thời gian ngắn nhất."',
            boschAuthor: '— Bosch Đức',
            solar: '"Ông Pham có kiến thức chuyên môn toàn diện và đa năng... Ông luôn tự giác phát triển chuyên môn."',
            solarAuthor: '— SolarWorld Đức',
            upwork: '"Phu, thật vinh dự được làm việc với bạn. Bạn rất tài năng và là chuyên gia về BI và Cơ sở dữ liệu."',
            upworkAuthor: '— Khách hàng Upwork ($1M+)',
            viewRef: 'Xem tham chiếu'
        },
        stories: {
            problem: 'Vấn đề:',
            solution: 'Giải pháp:',
            result: 'Kết quả:',
            story1Title: 'Cứu nhà máy khỏi tỷ lệ phế phẩm 20%',
            story1Tag: 'SẢN XUẤT TỰ ĐỘNG',
            story1Prob: 'Trong các dây chuyền sản xuất áp lực cao, việc phát hiện lỗi chậm trễ khiến nhà máy lãng phí hàng tấn nguyên liệu mỗi tháng. Quản lý sản xuất bị \'mù\' vì báo cáo chất lượng luôn đến muộn 2 ngày.',
            story1Sol: 'Chúng tôi đã triển khai hệ thống \'Digital Quality Guard\'. Dữ liệu từ các cảm biến máy móc được truyền theo thời gian thực đến bảng điều khiển. Mọi sai lệch về nhiệt độ/áp suất ngay lập tức kích hoạt cảnh báo tự động tới kỹ sư trưởng.',
            story1Res: 'Giảm tỷ lệ lỗi 20% ngay trong tháng đầu tiên. Đội ngũ kỹ thuật chuyển từ chế độ \'chữa cháy\' sang \'phòng ngừa rủi ro\' chủ động.',
            story2Title: 'Giải phóng 150 giờ cho kế toán',
            story2Tag: 'BÁN LẺ & TÀI CHÍNH',
            story2Prob: 'Cuối tháng là một cơn ác mộng đối với bộ phận kế toán: phải hợp nhất thủ công 14 tệp Excel từ 14 chi nhánh với định dạng hỗn loạn. Sai sót dữ liệu xảy ra thường xuyên và CEO chỉ biết doanh thu chính xác vào ngày 10 của tháng sau.',
            story2Sol: 'Chúng tôi đã loại bỏ quy trình thủ công bằng một \'đường ống dữ liệu\' tự động. Hệ thống tự động \'hút\' dữ liệu từ các thiết bị POS, làm sạch, chuẩn hóa và nạp vào Kho dữ liệu trung tâm mỗi đêm. Báo cáo tài chính được cập nhật tự động vào 8 giờ sáng.',
            story2Res: 'Tiết kiệm 150 giờ làm việc/tháng (gần bằng một nhân viên toàn thời gian). Độ chính xác 100%, CEO theo dõi dòng tiền hàng ngày trên điện thoại.',
            story3Title: 'AI đọc hợp đồng thay luật sư',
            story3Tag: 'PHÁP LÝ & HÀNH CHÍNH',
            story3Prob: 'Phòng pháp chế bị quá tải với hàng ngàn hợp đồng giấy. Việc tra cứu một điều khoản trong kho lưu trữ vật lý mất hàng giờ và nguy cơ bỏ sót các điều khoản bất lợi là rất cao.',
            story3Sol: 'Triển khai giải pháp \'AI Legal Assistant\' trên máy chủ nội bộ (bảo mật tuyệt đối). Sử dụng công nghệ OCR và LLM (Ollama) để số hóa tất cả tài liệu giấy. Nhân viên nhập câu hỏi bằng ngôn ngữ tự nhiên, AI trích xuất câu trả lời trong 2 giây.',
            story3Res: 'Giảm 80% thời gian tìm kiếm. Hệ thống tự động cảnh báo các điều khoản sắp hết hạn và giúp công ty tránh được các rủi ro pháp lý trị giá hàng tỷ đô la.'
        },
        expertise: {
            cat1: {
                title: 'Kiến trúc dữ liệu',
                i1: 'Phương pháp 3NF, Kimball, Data Vault 2.0',
                i2: 'Kiến trúc thời gian thực',
                i3: 'SAP Power Designer, pg modeler'
            },
            cat2: {
                title: 'Công nghệ cơ sở dữ liệu',
                i1: 'MS SQL Server (SSIS, SSAS, SSMS, SSRS)',
                i2: 'Postgres SQL, MySQL',
                i3: 'Kho dữ liệu Redshift',
                i4: 'Cơ sở dữ liệu đám mây Azure/AWS'
            },
            cat3: {
                title: 'Tích hợp dữ liệu',
                i1: 'Nhiều định dạng nguồn (CSV, Excel, SAP)',
                i2: 'Talend, SSIS ETL',
                i3: 'Đường ống ETL bằng Python',
                i4: 'Điều phối Airflow'
            },
            cat4: {
                title: 'Tối ưu hóa',
                i1: 'Thiết kế kho dữ liệu',
                i2: 'Chiến lược triển khai',
                i3: 'Tối ưu hóa hiệu suất',
                i4: 'Tinh chỉnh hiệu suất cơ sở dữ liệu'
            },
            cat5: {
                title: 'Phân tích',
                i1: 'Hệ sinh thái Hadoop (HIVE, Impala)',
                i2: 'Phân tích dữ liệu nâng cao',
                i3: 'Trực quan hóa dữ liệu',
                i4: 'Mô hình hóa thống kê'
            },
            cat6: {
                title: 'Business Intelligence',
                i1: 'Tableau Desktop và Server',
                i2: 'Microsoft Power BI',
                i3: 'Bảng điều khiển Qlikview',
                i4: 'Lập báo cáo dữ liệu'
            },
            cat7: {
                title: 'Tự động hóa',
                i1: 'Microsoft Power Automate',
                i2: 'Kịch bản tự động hóa Python',
                i3: 'Tự động hóa quy trình làm việc',
                i4: 'Tích hợp API'
            },
            cat8: {
                title: 'n8n',
                i1: 'Tự động hóa quy trình làm việc',
                i2: 'Tích hợp API',
                i3: 'Giải pháp Low-code',
                i4: 'Tối ưu hóa quy trình'
            },
            cat9: {
                title: 'Google Analytics',
                i1: 'Theo dõi và phân tích web',
                i2: 'Báo cáo tùy chỉnh',
                i3: 'Theo dõi chuyển đổi',
                i4: 'Tích hợp dữ liệu với các công cụ khác'
            }
        },
        facts: {
            fact1: 'Hơn 12 năm',
            fact1Desc: 'Kinh nghiệm về Kỹ thuật Dữ liệu & Phân tích',
            fact2: 'Người dẫn đầu đổi mới',
            fact2Desc: 'Người phát minh giải pháp Smart Factory 4.0 đạt giải',
            fact3: 'Hơn 50 dự án',
            fact3Desc: 'Hoàn thành thành công cho khách hàng quốc tế',
            fact4: 'Tập trung 100%',
            fact4Desc: 'Vào thành công kinh doanh đo lường được qua dữ liệu'
        },
        footer: {
            email: 'lienhe@phuviet.de'
        }
    }
};
